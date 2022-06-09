<template>
  <div>
    <div class="row">
      <span><b>Organization:</b></span>
    </div>
    <div class="row">
      <span>{{ organizationName }}</span>
    </div>
    <div class="row">
      <span><b>Station:</b></span>
    </div>
    <div class="row">
      <span>{{ stationId }}</span>
    </div>
    <div class="row">
      <span><b>Available Parameters:</b></span>
    </div>
    <div class="row">
      <span v-for="(parameter, index) in formattedParameterList" :key="parameter"> 
        {{ parameter}}<span v-if="index != parameterList.length - 1">,&nbsp; </span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['stationId', 'parameterList', 'organizationName'],
  computed: {
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    formattedParameterList() {
      let formattedParameterList = [...this.parameterList];
      this.parameterList.forEach((param, index) => {
        if (param == 'enterococcus') {
          formattedParameterList[index] = 'Enterococcus';
        }
        if (param == 'e. coli') {
          formattedParameterList[index] = 'E. coli';
        }
      })
      return formattedParameterList;
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
