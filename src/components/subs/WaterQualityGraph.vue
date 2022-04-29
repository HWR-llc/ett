<template>
  <div>
    <p class="floating-text" v-if="station == null"> <b>Select an active station and <br> click "Plot Data" to see a graph</b></p>
    <highcharts class="chart" :options="chartOptions" ref="chart" style="width: 380px; height: 180px"></highcharts>
  </div>
</template>

<script>
import { waterQualityThresholds } from '../../lib/constants'
export default {
  data() {
    return {
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
          title: {
            text: 'Year'
          },
          labels: {
            format: '{value:%Y-%m}'
          },
        },
        yAxis: {
          title: {
            text: 'parameter (units)'
          }
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
            name: 'threshold',
            data: []
          }
        ]
      }
    }
  },
  computed: {
    station() {
      return this.$store.state.station;
    },
    waterQualityGraphVariable() {
      return this.$store.state.waterQualityGraphVariable;
    },
    waterQualityGraphVariableCapital() {
      const titles = this.$store.state.waterQualityGraphVariable.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
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
      waterQualityMap.set('e. coli', 'ECOL');
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
        this.chartOptions.yAxis.title.text = this.waterQualityGraphVariableCapital + ' (' + activeData.units + ')';
        let dataSeries = [];
        activeData.values.forEach( row => {
          dataSeries.push({x: new Date(row.datetime).getTime(), y: row.value})
          // dataSeries.push(row.value)
        })
        this.chartOptions.series[0].data = dataSeries;
        this.chartOptions.series[1].name = 'Threshold: ' + this.waterQualityThresholds[this.waterQualityGraphVariable].value + 
                                          '(' + this.waterQualityThresholds[this.waterQualityGraphVariable].units + ')';
      });
    }
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
