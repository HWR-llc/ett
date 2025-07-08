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
    <highcharts class="chart" :options="chartOptions" ref="Chart" style="width: 100%; min-height: 400px; max-height:500px"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import patternFillInit from "highcharts/modules/pattern-fill"
patternFillInit(Highcharts);
import Exporting from 'highcharts/modules/exporting';
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
          events: {
            load: (function(self) {
              return function() {
                self.chart = this;
              };
            }) (this)
          }
        },
        exporting: {
          enabled: this.exporting
          },
          lang: {
            noData: 'No data to display in this area.<br> Select a different area to see data.'
          },
          tooltip: {
            pointFormat: "{point.y}"     
          },
          xAxis: {
            type: 'string',
            title: 'Year',
            categories: ['2023']
          },
          yAxis: [{
            min: 0,
            type: 'linear',
            gridLineWidth: 0,
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
                text: '2050 Goal (new access)',
                align: 'left',
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
                text: '2050 Goal (improved access)',
                align: 'left',
                x: 0,
                y: -10,
                style: {
                  fontWeight: 'bold'
                }
              }
            }]
          },// secondary axis
          {
            min: 0,
            max: 120,
            type: 'linear',
            endOnTick: false,
            opposite: true,
            gridLineWidth: 0,
            title: null,
            labels: {
              format: '{value}%'
            },
            stackLabels: {
             enabled : false,
           },
          }
          ],
          legend: {
            enabled: true
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
                color: '#ff95ce',
            },
            {
              name: 'Accessible',
              data: [413.1-100],
              color: '#ceff95'
            }
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
    embaymentCapital() {
      let nameStringArray = this.$store.state.embayment.split(" ");
      nameStringArray.forEach((word, index) => {
        if (word[0] == '(') {
          nameStringArray[index] = word.substring(0, 2) + word.slice(2).toLowerCase();
        } else {
          nameStringArray[index] = word[0] + word.slice(1).toLowerCase();
        }
      });
      return nameStringArray.join(' ');    
    }
  },
  watch: {
    '$store.state.embayment': {
      handler() {
          this.updateGraph()
      }, immediate: true
    },
    '$store.state.habitat': {
      handler() {
        this.updateGraph();
      }      
    },
  },
  methods: {
    habitatCapital(hab) {
      const titles = hab.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
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
        this.chartOptions.yAxis[0].plotLines[0].value = -100; 
        this.chartOptions.yAxis[0].plotLines[1].value = -100;             
        this.chartOptions.series[0].data = [];
        this.chartOptions.series[1].data = [];               
        // this.chartOptions.xAxis.categories = [];
        this.chartOptions.yAxis[0].title.text = '--';

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
            this.chartOptions.yAxis[0].plotLines[1].value = -100;
          } else {
            this.chartOptions.yAxis[0].plotLines[1].value = improve2050;
          }
          if (goal2050 <= 0) {
            this.chartOptions.yAxis[0].plotLines[0].value = -100;
          } else {
            this.chartOptions.yAxis[0].plotLines[0].value = goal2050;
          }
        })
        this.chartOptions.yAxis[0].title.text = newUnits[0];
        this.chartOptions.tooltip.pointFormat = "{point.y} " + newUnits[0];
        // calculate new max value for 2nd y-axis
        this.$nextTick(() => {
          let yAxis0Extreme = this.chart.yAxis[0].getExtremes();
          let newYAxis1Max = 100 * (yAxis0Extreme.max / yAxis0Extreme.dataMax);
          this.chartOptions.yAxis[1].max = newYAxis1Max;
        });
      } 

      const chart = this.$refs.Chart.chart;
      if (this.exporting == false) {
        chart.setTitle({
          text: this.dftype + ' Habitat',
          style: {
            fontSize: 'small'
          },
          y: 35
        });
        chart.setSubtitle({
          text: '(River Herring)',
          y: 50
        })
      } else {
        if (this.embayment == null) {
          chart.setTitle({
            text: this.habitatCapital(this.habitat) + ' Extent<br> All Assessment Areas',
          });
        } else {
          chart.setTitle({ text: this.habitatCapital(this.habitat) + ' Extent<br>' + this.embaymentCapital});
        }
        chart.setSubtitle({text: this.dftype + ' Habitat (River Herring)'});

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
