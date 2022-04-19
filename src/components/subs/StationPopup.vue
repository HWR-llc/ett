<template>
  <div>
    <b>Station:</b>
    <br>
    {{ stationId }}
    <br>
    <b>Parameter:</b>
    <br>
    {{ waterQuality }}
    <br><br>
    <b-button variant="primary" @click="plotData">Plot</b-button>    

  </div>
</template>

<script>

export default {
  props: ['stationId'],
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

<style>

</style>
