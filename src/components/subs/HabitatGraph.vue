<template>
  <div>
    <highcharts class="chart" :options="chartOptions" ref="Chart" style="width: 100%; min-height: 300px; max-height:500px"></highcharts>
    <button @click="exportChart">Export Chart</button>
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
        },
        title: {
          text: null
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
          categories: [
            '2000',
            '2005',
            '2050 Goal'
          ],
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
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    embayment() {
      return this.$store.state.embayment;
    },
    plotHabitatGraph() {
      return this.$store.state.plotHabitatGraph;
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
    }
  },

  methods: {
    exportChart() {
      const chart = this.$refs.chart.chart;
      if (chart) {
        chart.exportChart();
      }
    },
    updateGraph() {
      let newValues = [];
      let newCategories = [];
      let newUnits = [];
      let matchSet = null;

      if (this.embayment == null) {
          matchSet = this.habitatQuantities.filter(row => {
            return (row.ASSESSMENT_AREA == 'ALL' && row.TYPE == this.habitat)
          })
        } else {
          matchSet = this.habitatQuantities.filter(row => {
            return (row.ASSESSMENT_AREA == this.embayment && row.TYPE == this.habitat)
          });
        }
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
    // fetch water quality stations
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
