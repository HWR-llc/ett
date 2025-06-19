<!-- 
 File: DiadromousFishGraph.vue
 This file corresponds to the graph that appears in the right-hand side bar when habitat == Diadromous Fish.
 The graph will update upon selection/deselection of a fish run (river) with the fish run's accessible and 
 not accessible lengths in the form of a stacked bar chart. The colors of the plot match the highlighted 
 selected fish run. Default values for the chart are the All Assessment Areas, or the overall accessible
 and not accessible lengths of all rivers summed.
 
 Last updated: 6/17/2025 
 -->
 <template>
  <div>
    <highcharts class="chart" :options="chartOptions" ref="Chart" style="width: 100%; min-height: 300px; max-height:500px"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import Exporting from 'highcharts/modules/exporting';
// import { Math } from "core-js";({lang: {thousandsSep:','}})
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
Exporting(Highcharts);
NoDataToDisplay(Highcharts);
export default {
  props: ['dftype', 'exporting'],
  data() {
    return {
      test: 'test',
      chartOptions: {
        chart: {
          type: 'column',
        },
        exporting: {
          enabled: this.exporting
          },
          title: {
            text: null
          },
          lang: {
            noData: 'No diadromous fish habitat in this area.<br> Select a different area to see data.'
          },
          tooltip: {
            pointFormat: "{point.y}"     
          },
          xAxis: {
            type: 'string',
            title: 'Year',
            categories: ['2023']
          },
          yAxis: {
            min: 0,
            type: 'linear',
            title: {
              text: 'Miles'
            },
            stackLabels: {
             enabled : false,
           },
            plotLines: [{
              color: '#93D051',
              width: 3,
              dashStyle: 'LongDash',
              opacity: 0.5,
              value: -10,
              zIndex: 3,
              label: {
                text: '2050 Goal',
                align: 'center',
                x: 0,
                y: -10,
                style: {
                  fontWeight: 'bold'
                }
              }
            },
            {
              color: '#0000FF',
              width: 3,
              dashStyle: 'LongDash',
              opacity: 0.5,
              value: -100,
              zIndex: 3,
              label: {
                text: '2050 Goal (Improved Access)',
                align: 'center',
                x: 0,
                y: 15,
                style: {
                  fontWeight: 'bold'
                }
              }
            }]
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              stacking: 'normal'
            }
          },
          series: [
            {
              name: 'Not Accessible',
              data: [145.8],
                color: '#ff0000',
            },
            {
              name: 'Accessible',
              data: [413.1],
              color: '#006400'
            },
          ]
      }
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },    
    embayment() {
      return this.$store.state.embayment;
    },
    // whether to plot the fishRun graph or not
    plotFishRunGraph() {
      return this.$store.state.plotFishRunGraph;
    }
  },
  watch: {
    '$store.state.embayment': {
      handler() {
          this.updateGraph()
      }, immediate: true
    }
  },
  methods: {
    // method to update the chart upon update of data
    updateGraph() {
      let dfHabitat = '';
      if (this.dftype == 'Migratory') {
        dfHabitat = 'diadromous fish';
      } else {
        dfHabitat = 'diadromous fish (spawning)';
      }
      let newValues = [];
      let newCategories = [];
      let newUnits = [];
      let matchSet = null;

      if (this.embayment == null) {
        matchSet = this.habitatQuantities.filter(row => {
          return (row.ASSESSMENT_AREA == 'ALL' && row.TYPE == dfHabitat)
        })
      } else {
        matchSet = this.habitatQuantities.filter(row => {
          return (row.ASSESSMENT_AREA == this.embayment && row.TYPE == dfHabitat)
        });
      }
      if (matchSet.filter(row => row.VALUE == -999).length > 0) {
        this.chartOptions.yAxis.plotLines[0].value = -100;       
        this.chartOptions.series[0].data = [];
        this.chartOptions.series[1].data = [];        
        this.chartOptions.xAxis.categories = [];
        this.chartOptions.yAxis.title.text = '--';         
      } else {
        matchSet.sort((a, b) => (a.YEAR > b.YEAR) ? 1 : ((b.YEAR > a.YEAR) ? -1 : 0));
        matchSet.forEach(row => {
          newValues.push(row.VALUE);
          newCategories.push(row.YEAR);
          newUnits.push(row.UNITS);
          // calculate indices for splitting dataset
          let goal2050 = newValues[newValues.length - 2];
          let improve2050 = newValues[newValues.length - 1];
          let accessible = [];
          let inaccessible = [];
          for (var i = 0; i < newValues.length - 2; i += 2) {
            inaccessible.push(newValues[i]);
            accessible.push(newValues[i + 1]);
          }
          this.chartOptions.series[0].data = accessible;
          this.chartOptions.series[1].data = inaccessible;
          if (improve2050 <= 0) {
            this.chartOptions.yAxis.plotLines[1].value = -100;
          } else {
            this.chartOptions.yAxis.plotLines[1].value = improve2050;
          }
          if (goal2050 <= 0) {
            this.chartOptions.yAxis.plotLines[0].value = -100;
          } else {
            this.chartOptions.yAxis.plotLines[0].value = goal2050;
          }
        })
        this.chartOptions.yAxis.title.text = this.dftype + " " + newUnits[0];
        this.chartOptions.tooltip.pointFormat = "{point.y} " + newUnits[0]

      } 
    }
  },
  created() {
    // fetch habitat stations
    fetch('./data/habitat_quantities.json')
    .then(response => {
      return response.json()
    }).then(json => {
      this.habitatQuantities = json;
      this.updateGraph();
    })
  }  
  // mounted() {
  //   this.$nextTick(() => {
  //     this.updateGraph();
  //   })
  // }
}
</script>

<style>
.floating-text {
  position: absolute;
  margin: auto;
  width: 250px;
  top: 30%; left: 30%;
  z-index: 100;
}
</style>
