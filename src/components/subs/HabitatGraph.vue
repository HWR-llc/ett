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
      },
      habitatQuantities: null
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    embayment() {
      return this.$store.state.embayment;
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
      if (matchSet.length == 1) {
        alert('No historic or current ' + this.habitat + ' in ' + this.embayment + '. Graphing MassBays region-wide values');
        this.$store.dispatch('setEmbayment', null);
        matchSet = this.habitatQuantities.filter(row => {
          return (row.ASSESSMENT_AREA == 'ALL' && row.TYPE == this.habitat)
        });        
      }
      console.log(matchSet.length);
      matchSet.sort((a, b) => (a.YEAR > b.YEAR) ? 1 : ((b.YEAR > a.YEAR) ? -1 : 0));
      matchSet.forEach(row => {
        newValues.push(row.VALUE);
        newCategories.push(row.YEAR);
        newUnits.push(row.UNITS);
      })
      this.chartOptions.xAxis.categories = newCategories;
      this.chartOptions.series[0].data = newValues;
      this.chartOptions.yAxis.title.text = newUnits[0];
    }
  },
  created() {
    // fetch water quality stations
    fetch('./data/habitat_quantities.json')
    .then(response => {
      return response.json()
    }).then(json => {
      this.habitatQuantities = json;
      this.updateGraph()
    })
  }
}

</script>

<style>

</style>
