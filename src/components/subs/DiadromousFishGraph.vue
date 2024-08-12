<template>
    <div>
      <highcharts class="chart" :options="chartOptions" ref="chart" :style="styleObject"></highcharts>
    </div>
  </template>
  
  <script>
  import Highcharts from "highcharts"
  Highcharts.setOptions({lang: {thousandsSep:','}})
  import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
  NoDataToDisplay(Highcharts);
  export default {
    props: ['gwidth', 'gheight'],
    data() {
      return {
        test: 'test',
        chartOptions: {
          chart: {
            type: 'column',
          },
          title: {
            text: null
          },
          lang: {
            noData: 'No observed data to display in this area.<br> Select a waterway to see data.'
          },
          xAxis: {
            type: 'string',
            title: null,
            categories: ['All Assessment Areas']
          },
          yAxis: {
            type: 'linear',
            title: {
              text: 'Length (Miles)'
            },
            stackLabels: {
              enabled : true,
            },
            plotLines: [{
              color: '#ff8737',
              width: 3,
              dashStyle: 'LongDash',
              opacity: 0.5,
              value: -10,
              zIndex: 1,
              label: {
                text: 'threshold',
                align: 'right',
                // x: 0,
                y: -10
              }
            },
            {
              color: '#ff8737',
              width: 3,
              dashStyle: 'LongDash',
              opacity: 0.5,
              value: -10,
              zIndex: 1,
              label: {
                text: 'threshold 2',
                align: 'right',
                // x: 0,
                y: -10
              }
            }]
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              stacking: 'normal'
            },
            tooltip: {
                  headerFormat: '',
                  pointFormat: "{series.name}: {point.y} miles<br/>Total: {point.stackTotal} miles"     
                }
          },
          // set to the total accessible/not fishruns
          series: [
            {
              name: 'Accessible',
              data: [413.05570218665525],
            },
            {
              name: 'Not Accessible',
              data: [145.76605947501952],
            }
          ]
        }
      }
    },
    computed: {
      styleObject() {
        return {
          width: this.gwidth,
          height: this.gheight
        }
      },
      fishRun() {
        return this.$store.state.fishRun;
      },
      plotFishRunGraph() {
        return this.$store.state.plotFishRunGraph;
      }
    },
    watch: {
      '$store.state.fishRun': {
        handler() {
            this.plotData()
        }, immediate: true
      }
    },
    methods: {
      updateChart(newData) {
        if (this.$refs.chart) {
          const chart = this.$refs.chart.chart;
          const series_a = chart.series[0]
          const series_na = chart.series[1]

          // set the new Accessible and Not Accessible data
          series_a.setData([
            {name: 'Accessible', y :newData.Accessible_Len},
          ], false);
          series_na.setData([
            {name: 'Not Accessible', y:newData.N_Accessible_Len}
          ], false);

          // retain stacking
          chart.update({
            plotOptions: {
              series: {
                stacking: 'normal',
                tooltip: {
                  pointFormat: "{series.name}: {point.y} miles<br/>Total: {point.stackTotal} miles"     
                }
              }
            },
            xAxis: {
              categories: [this.$store.state.fishRun]
            }
          }, true);
        }},      

      plotData() {

        if (this.$store.state.plotFishRunGraph == true) {
          // fetch fish run data to update plot with
          var fn = this.fishRun.replaceAll(" ","").replaceAll("/", "").replaceAll("'","")
          const filePath = './data/df/row_'+fn+'.json';

          fetch(filePath)
            .then(response => {
              return response.json()
            }).then(json => {
              this.updateChart(json)
            })
          }
    },

    mounted() {
      this.$nextTick(() => {
        this.plotData();
      })
    }
    }}
  </script>
  
  <style>
  /* .highcharts-container {
      position: inherit !important;
  }
  .highcharts-tooltip {
      z-index: 9998;
      background-color:white;
      border:1px solid green;
      opacity:1;
  }
  
  .highcharts-tooltip div {
      background-color:white;
      border:1px solid green;
      opacity:1;
      z-index:9999!important;
  } */
  
  </style>
  