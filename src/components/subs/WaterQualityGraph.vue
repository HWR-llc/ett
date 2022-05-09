<template>
  <div>
    <p class="floating-text" v-if="station == null"> <b>Select an active station and <br> click "Plot Data" to see a graph</b></p>
    <highcharts class="chart" :options="chartOptions" ref="chart" :style="styleObject"></highcharts>
  </div>
</template>

<script>
import { waterQualityThresholds } from '../../lib/constants'
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
            value: 0
          }]
        },
        legend: {
          enabled: true
        },
        series: [
          {
            name: 'Observed',
            data: []
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
        this.chartOptions.yAxis.max = Math.max(...dataSeries.map(row => row.y));
        this.chartOptions.series[0].data = dataSeries;
        let thresholdValue = this.waterQualityThresholds[this.waterQualityGraphVariable].value
        this.chartOptions.yAxis.plotLines[0].value = thresholdValue
        this.chartOptions.series[1].name = 'Threshold: ' + thresholdValue + ' (' + this.waterQualityThresholds[this.waterQualityGraphVariable].units + ')';       
      });
    }
  },
  mounted() {
    this.plotData();
  }
}
</script>

<style scoped>
.floating-text {
  position: absolute;
  top: 30%;
  left: 30%;
  z-index: 100;
}

</style>
