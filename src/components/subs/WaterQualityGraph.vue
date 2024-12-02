<template>
  <div>
    <highcharts class="chart" :options="chartOptions" ref="chart" :style="styleObject"></highcharts>
  </div>
</template>

<script>
import { waterQualityThresholds } from '../../lib/constants'
import Highcharts from "highcharts"
Highcharts.setOptions({lang: {thousandsSep:','}})
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
NoDataToDisplay(Highcharts);

export default {
  props: ['gwidth', 'gheight'],
  
  data() {

    return {
      test: 'test',
      waterQualityThresholds: waterQualityThresholds,
      
      chartOptions: {
        chart: {
          type: 'scatter',
        },
        exporting: {
          enabled: false
        },
        title: {
          text: null
        },
        lang: {
          noData: 'No observed data to display in this area.<br> Select a different area to see data.'
        },
        tooltip: {
          pointFormat: "{point.x:%Y-%m-%d %H:%M} <br> {point.y}"     
        },
        rangeSelector: {
          enabled: true,
          selected:1
        },
        xAxis: {
          type: 'datetime',

          labels: {
            format: '{value:%b<br/>%Y}'
          },
          startOnTick: true,
          endOnTick: true
        },
        yAxis: {
          type: 'linear',
          title: {
            text: 'parameter (units)'
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
        series: [
          {
            name: 'Measurement',
            data: this.data,
            showInLegend: false
          },
        ]
      },
    }
  },
  computed: {
    styleObject() {
      return {
        width: this.gwidth,
        height: this.gheight
      }
    },
    station() {
      return this.$store.state.station;
    },
    waterQualityGraphVariable() {
      return this.$store.state.waterQualityGraphVariable;
    },
    waterQualityGraphVariableCapital() {
      const titles = this.$store.state.waterQualityGraphVariable.split(" ");
      let capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      if ((capitalTitle == 'Nitrogen') || (capitalTitle == 'Phosphorus')) {
        capitalTitle = 'Total ' + capitalTitle;
      }
      return capitalTitle;
    },
    showLargeGraph() {
      return this.$store.state.showLargeGraph;
    },
    plotWaterQualityGraph() {
      return this.$store.state.plotWaterQualityGraph;
    }
  },
  watch: {
    '$store.state.station'() {
      this.plotData();
    }
  },
  methods: {
    parameterMapper(parameterName) {
      const waterQualityMap = new Map();
      waterQualityMap.set('chlorophyl-a', 'CHLA');
      waterQualityMap.set('dissolved oxygen', 'DO');
      waterQualityMap.set('e. coli', 'ECOLI');
      waterQualityMap.set('enterococcus','ENT');
      waterQualityMap.set('pH', 'PH');
      waterQualityMap.set('salinity', 'SAL');
      waterQualityMap.set('temperature', 'TEMP');
      waterQualityMap.set('nitrogen', 'TN');
      waterQualityMap.set('phosphorus', 'TP');
      waterQualityMap.set('turbidity', 'TURB'); 
      return waterQualityMap.get(parameterName); 
    },
    plotData() {
      if (this.plotWaterQualityGraph == true) {
        let parameterCode = this.parameterMapper(this.waterQualityGraphVariable);
        // fetch water quality data
        fetch('./data/wq/' + this.station +'.json')
        .then(response => {
          return response.json()
        }).then(json => {

          let activeData = json.filter(row => row.param == parameterCode)[0];

          this.chartOptions.yAxis.title.text = this.waterQualityThresholds[this.waterQualityGraphVariable].title + ' (' + this.waterQualityThresholds[this.waterQualityGraphVariable].units + ')';    
          this.chartOptions.yAxis.type = this.waterQualityThresholds[this.waterQualityGraphVariable].scale;
          let dataSeries = [];

          activeData.values.forEach( row => {
            dataSeries.push({x: new Date(row.datetime).getTime(), y: row.value})
          })
          this.chartOptions.yAxis.min = this.waterQualityThresholds[this.waterQualityGraphVariable].minValue;
          let thresholdValue = Math.max(...this.waterQualityThresholds[this.waterQualityGraphVariable].value);
          let thresholdValueBuffer = thresholdValue * 1.05
          let maxDataValue = Math.max(...dataSeries.map(row => row.y))
          if ( maxDataValue > thresholdValue) {
            this.chartOptions.yAxis.max = maxDataValue;
          } else {
            this.chartOptions.yAxis.max = thresholdValueBuffer;
          }
          if (this.waterQualityGraphVariable == 'salinity') {
            this.chartOptions.yAxis.max = 35;
          }
          this.chartOptions.series[0].data = dataSeries;
          this.chartOptions.tooltip.pointFormat = "{point.x:%Y-%m-%d %H:%M} <br> {point.y} " + this.waterQualityThresholds[this.waterQualityGraphVariable].units
          this.chartOptions.yAxis.plotLines[0].value = this.waterQualityThresholds[this.waterQualityGraphVariable].value[0]
           if (this.waterQualityGraphVariable == 'salinity') {
            this.chartOptions.yAxis.plotLines[1].value = this.waterQualityThresholds[this.waterQualityGraphVariable].value[1];
            this.chartOptions.yAxis.plotLines[0].label.text = 'Estuarine: >' + this.waterQualityThresholds[this.waterQualityGraphVariable].value[0] + ' ' + this.waterQualityThresholds[this.waterQualityGraphVariable].units + '<br>' + this.waterQualityThresholds[this.waterQualityGraphVariable].type[0] + ': <' + this.waterQualityThresholds[this.waterQualityGraphVariable].value[0] + ' ' + this.waterQualityThresholds[this.waterQualityGraphVariable].units;
            this.chartOptions.yAxis.plotLines[1].label.text = 'Marine: >' + this.waterQualityThresholds[this.waterQualityGraphVariable].value[1] + ' ' + this.waterQualityThresholds[this.waterQualityGraphVariable].units;
            this.chartOptions.yAxis.plotLines[0].label.y = -20;
            console.log(this.chartOptions.yAxis.plotlines[0].label.y);
          } else if (this.waterQualityGraphVariable == 'pH') {
            this.chartOptions.yAxis.plotLines[1].value = this.waterQualityThresholds[this.waterQualityGraphVariable].value[1];
            this.chartOptions.yAxis.plotLines[0].label.text = this.waterQualityThresholds[this.waterQualityGraphVariable].type[0] +' Threshold: ' +
            this.waterQualityThresholds[this.waterQualityGraphVariable].value[0] + ' ' + this.waterQualityThresholds[this.waterQualityGraphVariable].units;
            this.chartOptions.yAxis.plotLines[1].label.text = this.waterQualityThresholds[this.waterQualityGraphVariable].type[1] +' Threshold: ' + this.waterQualityThresholds[this.waterQualityGraphVariable].value[1] + 
            ' ' + this.waterQualityThresholds[this.waterQualityGraphVariable].units + ''
            this.chartOptions.yAxis.plotLines[0].label.y = 15; 
          } else {
            this.chartOptions.yAxis.plotLines[1].value = -10;            
            this.chartOptions.yAxis.plotLines[0].label.text = this.waterQualityThresholds[this.waterQualityGraphVariable].type[0] + ' Threshold: ' + thresholdValue + ' ' + this.waterQualityThresholds[this.waterQualityGraphVariable].units + '';

            this.chartOptions.yAxis.plotLines[0].label.y = -10;            
          }                   
        });
      } else {
        this.chartOptions.yAxis.title.text = 'parameter (units)';
        this.chartOptions.series[0].data = []
        this.chartOptions.yAxis.plotLines[0].value = -10;
        this.chartOptions.yAxis.plotLines[1].value = -10;
        this.chartOptions.series[1].name = 'Threshold';
      }
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
