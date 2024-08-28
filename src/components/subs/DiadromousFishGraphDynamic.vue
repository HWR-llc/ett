<template>
    <div>
      <highcharts class="chart" :options="chartOptions" ref="chart" :style="styleObject"></highcharts>
    </div>
  </template>
  
<script>
import Highcharts from "highcharts";
import Exporting from 'highcharts/modules/exporting';
import { Math } from "core-js";({lang: {thousandsSep:','}})
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
NoDataToDisplay(Highcharts);
Exporting(Highcharts);

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
            text: 'Diadromous Fish Extent<br>All Assessment Areas'
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
          legend:{ 
              enabled:true,
              align:'right',
              verticalAlign:'middle',
              layout:'vertical'
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
              name: 'Not Accessible',
              data: [145.8],
              color: '#ff0000',
            },
          {
              name: 'Accessible',
              data: [413.1],
              color: '#006400'},
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
          const series_a = chart.series[1]
          const series_na = chart.series[0]
          
          if (newData !== null) {
            // set the new Accessible and Not Accessible data
            series_a.update({
              data:[{name: 'Accessible', y: Math.round(newData.Accessible_Len * 10) / 10}],
              color: '#15ff2b'
            }, false);
            series_na.update({
              data:[{name: 'Not Accessible', y: Math.round(newData.N_Accessible_Len * 10) / 10}],
              color: '#ff15c3'
            }, false);
            chart.setTitle({ text: 'Diadromous Fish Extent<br>' + this.fishRun})

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
          }, true, true)} else {
            // return to overall values
            
            series_a.setData([
              {name: 'Accessible', y:413.1, color:'#006400'},
            ], false);
            series_na.setData([
              {name: 'Not Accessible', y:145.8, color:'#ff0000'}
            ], false);
            chart.setTitle({ text: 'Diadromous Fish Extent<br>All Assessment Areas' });


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
              categories: ['All Assessment Areas']
            }
          }, true, true);
          }
          chart.redraw();
        }},      

      plotData() {
        if (this.fishRun == null) {
          this.updateChart(null)
        } else {

        if (this.$store.state.plotFishRunGraph === true) {
          // fetch fish run data to update plot with
          var fn = this.fishRun.replaceAll(" ","").replaceAll("/", "").replaceAll("'","")
          // const filePath = './data/df/row_'+fn+'.json';
          const filePath = './data/df_chart_data.json';
          
          fetch(filePath)
            .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
              return response.json()

            }).then(json => {
              const extractThis = json.find(item => item.Name === fn);
              this.updateChart(extractThis);
            } )
    
          }}
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
  