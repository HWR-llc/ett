<template>
  <div>
    <p class="floating-text" v-if="station == null"> <b>Select an active station and <br> click "Plot Data" to see a graph</b></p>
    <highcharts class="chart" :options="chartOptions" ref="chart" style="width: 100%; min-height: 300px; max-height:500px"></highcharts>
  </div>
</template>

<script>

export default {
  data() {
    return {
      chartOptions: {
        title: {
          text: null
        },
        xAxis: {
          type: 'datetime',
          labels: {
            format: '{value:%Y-%m}'
          }
        },
        yAxis: {
          title: {
            text: 'parameter (units)'
          }
        },
        legend: {
          enabled: false
        },
        series: [
          {
            lineWidth: 0,
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
      waterQualityMap.set('e. coli', 'ECOL');
      waterQualityMap.set('enterococcus','ENT');
      waterQualityMap.set('pH', 'PH');
      waterQualityMap.set('salinity', 'SAL');
      waterQualityMap.set('temperature', 'TEMP');
      waterQualityMap.set('nitrogen', 'TN');
      waterQualityMap.set('phosphorus', 'TP');
      waterQualityMap.set('clarity', 'TURB'); 
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
        this.chartOptions.yAxis.title.text = this.waterQualityGraphVariable + ' (' + activeData.units + ')';
        let dataSeries = [];
        activeData.values.forEach( row => {
          dataSeries.push({x: new Date(row.datetime).getTime(), y: row.value})
          // dataSeries.push(row.value)
        })
        this.chartOptions.series[0].data = dataSeries;

        console.log(dataSeries);

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
