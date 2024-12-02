<!-- 
 HabitatGraphDynamic.vue
 This file serves as the dynamic version of the HabitatGraph.vue. It is the pop-out version of the
 right-hand side bar habitat graph bar chart, available when the red "printer" icon is clicked on.
 This dynamic graph provides the user with a larger graph with printing and save-as-image capabilities.
 This dynamic graph will represent the data that is in the right-hand side bar, reflecting any embayment 
 selections made prior to clicking the red "printer" icon. The graph also allows the user to click
 and drag, zooming to the selection.

 Last updated: 11/12/2024
 -->
 
 <template>
  <div>
    <highcharts class="chart" :options="chartOptions" ref="Chart" style="width: 100%; min-height: 300px; max-height:500px"></highcharts>
    <button v-if="zoomed" @click="resetZoom">Reset Zoom</button>
 </div>
</template>

<script>
import Highcharts from "highcharts"
import Exporting from 'highcharts/modules/exporting';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
NoDataToDisplay(Highcharts);
Highcharts.setOptions({lang: {thousandsSep:','}})
Exporting(Highcharts);

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column',
          zoomType: 'x',
          events: {
            selection: (event) => {
              if (event.xAxis != null) {
                this.updateXAxisRange(event.xAxis[0].min, event.xAxis[0].max);
              } return false;
            } 
          }
        },
        lang: {
          noData: 'No data to display in this area.<br> Select a different area to see data.'
        },
        tooltip: {
          pointFormat: "{point.y}"     
        },
        xAxis: {
          title: {
            text: 'Year'
          },
          min: 0,
          crosshair: true,
          type: 'datetime',
          labels: {
            format: '{value:%Y}'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Acres'
          },
          plotLines: [{
            color: '#93D051',
            width: 3,
            dashStyle: 'LongDash',
            opacity: 0.5,
            value: -100,
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
          }]
        },
        legend: {
          enabled: false
        },
        series: [
          {
            name: 'Area',
            data: [5000, 4000, 6000]
          }
        ]
      },
      habitatQuantities: null,
      zoomed: false
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    embayment() {
      return this.$store.state.embayment;
    },
    showHabitatGraphDynamic() {
      return this.$store.state.showHabitatGraphDynamic;
    },
    plotHabitatGraph() {
      return this.$store.state.plotHabitatGraph;
    },
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
    // method to reset the graph from the zoom
    resetZoom() {
      this.updateGraph();
      this.zoomed = false;
    },

    // method to update the x axis range
    updateXAxisRange(minIndex, maxIndex) {
      const chart = this.$refs.Chart.chart;
      const categories = this.chartOptions.xAxis.categories;
      let filtCategories = categories.slice(Math.max(Math.round(minIndex), 0), Math.round(maxIndex) + 1);
      let newValues = [];
      let newUnits = [];
      let newCategories = [];
      let matchSet = null;
      this.zoomed = true;

      if (this.embayment == null) {
          chart.setTitle({ text: this.habitatCapital(this.habitat) + ' Extent<br>All Assessment Areas'});
          matchSet = this.habitatQuantities.filter(row => {
            return (row.ASSESSMENT_AREA == 'ALL' && row.TYPE == this.habitat)
          })
        } else {
          chart.setTitle({ text: this.habitatCapital(this.habitat) + ' Extent<br>' + this.embayment});
          matchSet = this.habitatQuantities.filter(row => {
            return (row.ASSESSMENT_AREA == this.embayment && row.TYPE == this.habitat)
          });
        }

        // filter and plot the data
        if ((matchSet.filter(row => row.VALUE == -999).length > 0) && (matchSet.length == 1)) {
          this.chartOptions.yAxis.plotLines[0].value = -100;
          this.chartOptions.series[0].data = [];
          this.chartOptions.yAxis.title.text = '--';         
        } else if (matchSet.length == 1) {
          this.chartOptions.yAxis.plotLines[0].value = matchSet[0].VALUE;
          this.chartOptions.yAxis.title.text = matchSet[0].UNITS;
          this.chartOptions.series[0].data =[0];
        } else {
          matchSet.sort((a, b) => (a.YEAR > b.YEAR) ? 1 : ((b.YEAR > a.YEAR) ? -1 : 0));
          matchSet.forEach(row => {
            if (row.YEAR.includes(' ')) {
              newValues.push(row.VALUE);
              newCategories.push(row.YEAR);
              newUnits.push(row.UNITS); 
            } else {
              if (filtCategories.includes(row.YEAR)) {
                newValues.push(row.VALUE);
                newCategories.push(row.YEAR);
                newUnits.push(row.UNITS); 
              } 
            }
            let updatePlotLineValue = -100;
          if (newCategories[newCategories.length - 1] == '2050 Goal') {
            if (newValues[newValues.length - 1] != 0) {
              updatePlotLineValue = newValues[newValues.length - 1];
            }          
            newCategories = newCategories.slice(0, newCategories.length - 1);
            newValues = newValues.slice(0, newValues.length - 1);
          }
          this.chartOptions.yAxis.plotLines[0].value = updatePlotLineValue;
          this.chartOptions.xAxis.categories = newCategories;
          this.chartOptions.series[0].data = newValues;
          this.chartOptions.yAxis.title.text = newUnits[0];
          this.chartOptions.tooltip.pointFormat = "{point.y} " + newUnits[0]
          this.chartOptions.yAxis.softMax = updatePlotLineValue * 1.1;
        }
      )}
    },
    // exportChart() {
    //   const chart = this.$refs.Chart.chart;
    //   if (chart) {
    //     chart.exportChart();
    //   }
    // },
    // method to capitalize the habitat name
    habitatCapital(hab) {
      const titles = hab.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
    // method to update the graph with new data
    updateGraph() {
      let newValues = [];
      let newCategories = [];
      let newUnits = [];
      let matchSet = null;

      const chart = this.$refs.Chart.chart;

      // set the data to embayment if one is selected, otherwise All Assessment Areas
      if (this.embayment == null) {
          chart.setTitle({ text: this.habitatCapital(this.habitat) + ' Extent<br>All Assessment Areas'});
          matchSet = this.habitatQuantities.filter(row => {
            return (row.ASSESSMENT_AREA == 'ALL' && row.TYPE == this.habitat)
          })
        } else {
          chart.setTitle({ text: this.habitatCapital(this.habitat) + ' Extent<br>' + this.embayment});
          matchSet = this.habitatQuantities.filter(row => {
            return (row.ASSESSMENT_AREA == this.embayment && row.TYPE == this.habitat)
          });
        }
        
      // if (this.embayment == null) {
      //     matchSet = this.habitatQuantities.filter(row => {
      //       return (row.ASSESSMENT_AREA == 'ALL' && row.TYPE == this.habitat)
      //     })
      //   } else {
      //     matchSet = this.habitatQuantities.filter(row => {
      //       return (row.ASSESSMENT_AREA == this.embayment && row.TYPE == this.habitat)
      //     });
      //   }

        // filter and plot the data
        if ((matchSet.filter(row => row.VALUE == -999).length > 0) && (matchSet.length == 1)) {
          this.chartOptions.yAxis.plotLines[0].value = -100;
          this.chartOptions.series[0].data = [];
          this.chartOptions.xAxis.categories = [];
          this.chartOptions.yAxis.title.text = '--';         
        } else if (matchSet.length == 1) {
          this.chartOptions.yAxis.plotLines[0].value = matchSet[0].VALUE;
          this.chartOptions.yAxis.title.text = matchSet[0].UNITS;
          this.chartOptions.xAxis.categories =[''];
          this.chartOptions.series[0].data =[0];
        } else {
          matchSet.sort((a, b) => (a.YEAR > b.YEAR) ? 1 : ((b.YEAR > a.YEAR) ? -1 : 0));
          matchSet.forEach(row => {
            newValues.push(row.VALUE);
            newCategories.push(row.YEAR);
            newUnits.push(row.UNITS);  
          })
          let updatePlotLineValue = -100;
          if (newCategories[newCategories.length - 1] == '2050 Goal') {
            if (newValues[newValues.length - 1] != 0) {
              updatePlotLineValue = newValues[newValues.length - 1];
            }          
            newCategories = newCategories.slice(0, newCategories.length - 1);
            newValues = newValues.slice(0, newValues.length - 1);
          }
          this.chartOptions.yAxis.plotLines[0].value = updatePlotLineValue;
          this.chartOptions.xAxis.categories = newCategories;
          this.chartOptions.series[0].data = newValues;
          this.chartOptions.yAxis.title.text = newUnits[0];
          this.chartOptions.tooltip.pointFormat = "{point.y} " + newUnits[0]
          this.chartOptions.yAxis.softMax = updatePlotLineValue * 1.1;
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
