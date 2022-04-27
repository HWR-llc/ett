<template>
  <div>
    <div class="row">
      <b>Organization:</b>
      <br>
      {{ providerName }}
    </div>
    <div class="row">
      <b>Station:</b>
      <br>
      {{ stationId }}
    </div>
    <div class="row">
      <b>Available Parameters:</b><br>
        <span v-for="parameter in parameterList" :key="parameter"> 
          {{ parameter}}
        </span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['stationId', 'parameterList', 'providerName'],
  computed: {
    waterQuality() {
      return this.$store.state.waterQuality;
    }    
  },
  methods: {
    plotData() {
      this.$store.dispatch('setWaterQualityGraphVariable', this.waterQuality);
      this.$store.dispatch('setStation', this.stationId);
    }
  }  

}
</script>

<style scoped>

</style>
