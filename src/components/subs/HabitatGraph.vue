<template>
  <div>
    <highcharts class="chart" :options="chartOptions" ref="Chart" style="width: 100%; min-height: 300px; max-height:500px"></highcharts>
  </div>
</template>

<script>

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
          }
        },
        legend: {
          enabled: false
        },
        series: [
          {
            name: 'Placeholder',
            data: [5000, 4000, 6000]
          }
        ]
      }
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
  },
  watch: {
    '$store.state.habitatGraphData': {
      handler(newData) {
        this.updateGraph(newData)
      }, immediate: true  
    },
    '$store.state.habitat': {
      handler() {
        this.updateGraph(this.$store.state.habitatGraphData);
      }      
    }
  },
  methods: {
    updateGraph(newData) {
      let newDataSubset = newData[this.habitat]
      let newCategories = []
      let newValues = []
      newDataSubset.data.forEach(row => {
        newCategories.push(row.year.toString());
        newValues.push(row.value);
      });
      newCategories[newCategories.length - 1] = newCategories[newCategories.length - 1] + ' Goal'
      this.chartOptions.xAxis.categories = newCategories;
      this.chartOptions.series[0].data = newValues;
      this.chartOptions.yAxis.title.text = newDataSubset.units;
    }
  }
}

</script>

<style>

</style>
