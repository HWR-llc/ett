<template>
  <div>
    <div class="row">
      <b>Station:</b>
      {{ stationId }}
    </div>
    <div class="row">
      <div v-if="!parameterList.includes(waterQuality)">
        <b>Available Parameters:</b>
        <ul class="no-bullets">
          <li v-for="parameter in parameterList" :key="parameter"> 
            {{ parameter}}
          </li>
        </ul>
      </div>
      <div v-else>
        <b> Parameter:</b><br>
        {{ waterQuality}}
      </div>
    </div>
    <br>
    <div class="row">
      <b-button variant="primary" class="mod-button" @click="plotData" :disabled="!parameterList.includes(waterQuality)">Plot Data</b-button>   
    </div>
  </div>
</template>

<script>

export default {
  props: ['stationId', 'parameterList'],
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
.mod-button {
  padding: 2px;
  font-size: 12px;
  width: 100%;
}

button:disabled {
  background-color: gray;
  border: gray;
}

ul.no-bullets{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

</style>
