<template>
    <div>
      <highcharts class="chart" :options="chartOptions" ref="chart" :style="styleObject"></highcharts>
    </div>
  </template>
  
  <script>
//   import { waterQualityThresholds } from '../../lib/constants'
  import Highcharts from "highcharts"
  Highcharts.setOptions({lang: {thousandsSep:','}})
  import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
  NoDataToDisplay(Highcharts);
  export default {
    props: ['gwidth', 'gheight'],
    data() {
      return {
        test: 'test',
        // waterQualityThresholds: waterQualityThresholds,
        
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
          tooltip: {
            headerFormat: '<b>{point.x}</b><br/',
            pointFormat: "{series.Name}: {point.y}<br/>Total: {point.stackTotal}"     
          },
          xAxis: {
            type: 'string',
            // title: {
            //   text: 'Date'
            // },
            labels: {
              format: '{value:%b<br/>%Y}'
            },
            startOnTick: true,
            endOnTick: true
          },
          yAxis: {
            type: 'linear',
            title: {
              text: null
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
                x: 0,
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
                x: 0,
                y: -10
              }
            }]
          },
          legend: {
            enabled: true
          },
          plotOptions: {
            column: {
              stacking: 'normal'
            }
          },
          series: [
            {
              name: 'Accessible',
              data: [],
            },
            {
              name: 'Not Accessible',
              data: [],
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
      // fishRunGraphVariable() {
      //   return this.$store.state.fishRunGraphVariable;
      // },
      // fishRunGraphVariableCapital() {
      //   const titles = this.$store.state.fishRunGraphVariable.split(" ");
      //   let capitalTitle = titles.map((word) => {
      //     return word[0].toUpperCase() + word.substring(1);
      //   }).join(" ");
      //   return capitalTitle;
      // },
      showLargeGraph() {
        return this.$store.state.showLargeGraph;
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
    //   parameterMapper(parameterName) {
    //     const waterQualityMap = new Map();
    //     waterQualityMap.set('chlorophyl-a', 'CHLA');
    //     waterQualityMap.set('dissolved oxygen', 'DO');
    //     waterQualityMap.set('e. coli', 'ECOLI');
    //     waterQualityMap.set('enterococcus','ENT');
    //     waterQualityMap.set('pH', 'PH');
    //     waterQualityMap.set('salinity', 'SAL');
    //     waterQualityMap.set('temperature', 'TEMP');
    //     waterQualityMap.set('nitrogen', 'TN');
    //     waterQualityMap.set('phosphorus', 'TP');
    //     waterQualityMap.set('turbidity', 'TURB'); 
    //     return waterQualityMap.get(parameterName); 
    //   },
      plotData() {
        console.log(this.$store.state.fishRun)
        console.log(this.$store.state.plotFishRunGraph)
        if (this.$store.state.plotFishRunGraph == true) {
          console.log('okayyy')
          // fetch fish run data
          fn = this.fishRun.replace(" ","").replace("/", "").replace("'","")
          fr_data = './data/df/row_' + fn + '.json'
          console.log(fr_data)
          }
        //   let parameterCode = this.parameterMapper(this.fishRunGraphVariable);
          // fetch fish run data
      //     if (this.$store.state.fishRun != null) {
      //       fn = this.fishRun.replace(" ","").replace("/", "").replace("'","")
      //       fr_data = './data/df/row_{}.json'.format(fn)
      //       console.log(fr_data)
      //       fetch(fr_data)
      //       .then(response => {
      //         return response.json()
      //     }).then(json => {
      //       // filter out data for only the selected fish run
      //       // let activeData = json.filter(row => row.Name == this.fishRun)[0];
      //       // console.log(activeData)
      //       this.chartOptions.yAxis.title.text = "Fish Run Length (miles)"
      //       // this.chartOptions.yAxis.type = this.waterQualityThresholds[this.fishRunGraphVariable].scale;
      //       // let dataSeries = [];
      //       // activeData.values.forEach( row => {
      //       //   dataSeries.push({x: new Date(row.datetime).getTime(), y: row.value})
      //       // })
      //       // this.chartOptions.yAxis.min = this.waterQualityThresholds[this.fishRunGraphVariable].minValue;
      //       // let thresholdValue = Math.max(...this.waterQualityThresholds[this.fishRunGraphVariable].value);
      //       // let thresholdValueBuffer = thresholdValue * 1.05
      //       // let maxDataValue = Math.max(...dataSeries.map(row => row.y))
      //       // if ( maxDataValue > thresholdValue) {
      //       //   this.chartOptions.yAxis.max = maxDataValue;
      //       // } else {
      //       //   this.chartOptions.yAxis.max = thresholdValueBuffer;
      //       // }
      //       // if (this.fishRunGraphVariable == 'salinity') {
      //       //   this.chartOptions.yAxis.max = 35;
      //       // }
      //       this.chartOptions.stackLabels = true;
      //       this.chartOptions.series[0].data = dataSeries;
      //       this.chartOptions.tooltip.pointFormat = "{point.x:%Y-%m-%d %H:%M} <br> {point.y} " + this.waterQualityThresholds[this.fishRunGraphVariable].units
      //       this.chartOptions.yAxis.plotLines[0].value = this.waterQualityThresholds[this.fishRunGraphVariable].value[0]
      //        if (this.fishRunGraphVariable == 'salinity') {
      //         this.chartOptions.yAxis.plotLines[1].value = this.waterQualityThresholds[this.fishRunGraphVariable].value[1];
      //         this.chartOptions.yAxis.plotLines[0].label.text = 'Estuarine: >' + this.waterQualityThresholds[this.fishRunGraphVariable].value[0] + ' ' + this.waterQualityThresholds[this.fishRunGraphVariable].units + '<br>' + this.waterQualityThresholds[this.fishRunGraphVariable].type[0] + ': <' + this.waterQualityThresholds[this.fishRunGraphVariable].value[0] + ' ' + this.waterQualityThresholds[this.fishRunGraphVariable].units;
      //         this.chartOptions.yAxis.plotLines[1].label.text = 'Marine: >' + this.waterQualityThresholds[this.fishRunGraphVariable].value[1] + ' ' + this.waterQualityThresholds[this.fishRunGraphVariable].units;
      //         this.chartOptions.yAxis.plotLines[0].label.y = -20;
      //         console.log(this.chartOptions.yAxis.plotlines[0].label.y);
      //       } else if (this.fishRunGraphVariable == 'pH') {
      //         this.chartOptions.yAxis.plotLines[1].value = this.waterQualityThresholds[this.fishRunGraphVariable].value[1];
      //         this.chartOptions.yAxis.plotLines[0].label.text = this.waterQualityThresholds[this.fishRunGraphVariable].type[0] +' Threshold: ' +
      //         this.waterQualityThresholds[this.fishRunGraphVariable].value[0] + ' ' + this.waterQualityThresholds[this.fishRunGraphVariable].units;
      //         this.chartOptions.yAxis.plotLines[1].label.text = this.waterQualityThresholds[this.fishRunGraphVariable].type[1] +' Threshold: ' + this.waterQualityThresholds[this.fishRunGraphVariable].value[1] + 
      //         ' ' + this.waterQualityThresholds[this.fishRunGraphVariable].units + ''
      //         this.chartOptions.yAxis.plotLines[0].label.y = 15; 
      //       } else {
      //         this.chartOptions.yAxis.plotLines[1].value = -10;            
      //         this.chartOptions.yAxis.plotLines[0].label.text = this.waterQualityThresholds[this.fishRunGraphVariable].type[0] + ' Threshold: ' + thresholdValue + ' ' + this.waterQualityThresholds[this.fishRunGraphVariable].units + '';
  
      //         this.chartOptions.yAxis.plotLines[0].label.y = -10;            
      //       }
      //     })
      //   } else {
      //     this.chartOptions.yAxis.title.text = 'parameter (units)';
      //     this.chartOptions.series[0].data = []
      //     this.chartOptions.yAxis.plotLines[0].value = -10;
      //     this.chartOptions.yAxis.plotLines[1].value = -10;
      //     this.chartOptions.series[1].name = 'Threshold';
      //   }
      // }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.plotData();
      })
    }
  }
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
  