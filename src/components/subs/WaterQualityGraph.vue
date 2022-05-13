<template>
  <div>
    <p class="floating-text" v-if="!plotWaterQualityGraph">
      <b>Select an active station:</b>
      <svg height="20" width="30">
        <circle id="legend 6" cx="15" cy="10" r="5" style="fill: #00B0F0"/>
      </svg><br>
      <b>to see a plot of the data.</b>
    </p>
    <highcharts class="chart" :options="chartOptions" ref="chart" :style="styleObject"></highcharts>
  </div>
</template>

<script>
import { waterQualityThresholds } from '../../lib/constants'
import Highcharts from "highcharts"
Highcharts.setOptions({lang: {thousandsSep:','}})
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
        title: {
          text: null
        },
        tooltip: {
          pointFormat: "{point.x:%Y-%m-%d %H:%M} <br> {point.y}"
        },
        xAxis: {
          type: 'datetime',
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
            text: 'parameter (units)'
          },
          plotLines: [{
            color: '#ff8737',
            width: 3,
            dashStyle: 'LongDash',
            opacity: 0.5,
            value: -10
          }]
        },
        legend: {
          enabled: true
        },
        series: [
          {
            name: 'Observed',
            data: [],
            showInLegend: false
          },
          {
            type: 'line',
            name: 'threshold',
            data: [],
            marker: {
              enabled: false
            },
            color: '#ff8737',
            lineWidth: 3,
            dashStyle: 'LongDash',
            opacity: 0.5,
            enableMouseTracking: false
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

          this.chartOptions.yAxis.title.text = this.waterQualityGraphVariableCapital + ' (' + this.waterQualityThresholds[this.waterQualityGraphVariable].units + ')';    
          this.chartOptions.yAxis.type = this.waterQualityThresholds[this.waterQualityGraphVariable].scale;
          let dataSeries = [];
          activeData.values.forEach( row => {
            dataSeries.push({x: new Date(row.datetime).getTime(), y: row.value})
          })
          this.chartOptions.yAxis.min = this.waterQualityThresholds[this.waterQualityGraphVariable].minValue;
          let thresholdValue = this.waterQualityThresholds[this.waterQualityGraphVariable].value
          let maxDataValue = Math.max(...dataSeries.map(row => row.y))
          if ( maxDataValue> thresholdValue) {
            this.chartOptions.yAxis.max = maxDataValue;
          } else {
            this.chartOptions.yAxis.max = thresholdValue;
          }        
          this.chartOptions.series[0].data = dataSeries;
          this.chartOptions.yAxis.plotLines[0].value = thresholdValue
          this.chartOptions.series[1].name = this.waterQualityThresholds[this.waterQualityGraphVariable].type + ' Threshold: ' + thresholdValue + ' (' + this.waterQualityThresholds[this.waterQualityGraphVariable].units + ')';       
        });
      } else {
        this.chartOptions.yAxis.title.text = 'parameter (units)';
        this.chartOptions.series[0].data = []
        this.chartOptions.yAxis.plotLines[0].value = -10;
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

<style scoped>
.floating-text {
  position: absolute;
  margin: auto;
  top: 50%; left: 30%;
  z-index: 100;
}

</style>
