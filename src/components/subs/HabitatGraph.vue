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
            '2050'
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
}
</script>

<style>

</style>
