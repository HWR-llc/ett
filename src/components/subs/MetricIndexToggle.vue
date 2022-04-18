<template>
  <div>
    <!-- Metric Toggle -->
    <div class="row">
      <div class="col-3" style="padding-top: 5px">
        <toggle-button v-model="habitatMetricLayer" :sync="true"></toggle-button>
      </div>
      <div class="col-9">
        <div class="row">
          Percent of Habitat Target
        </div>
        <div class="row" style="padding-top: 5px">
          <div class="col-12">
            <svg height="30">
              <rect id="patch" x="0" y="0" width="35" height="25" style="fill: #d7191c"/>
              <rect id="patch" x="35" y="0" width="35" height="25" style="fill: #fdae61"/>
              <rect id="patch" x="70" y="0" width="35" height="25" style="fill: #ffffbf"/>
              <rect id="patch" x="105" y="0" width="35" height="25" style="fill: #abdda4"/>
              <rect id="patch" x="105" y="0" width="35" height="25" style="fill: #2b83ba"/>
            </svg>
          </div>
        </div>     
      </div>         
    </div>
    <!-- Index Toggle -->
    <div class="row">
      <div class="col-3" style="padding-top: 5px">
        <toggle-button v-model="habitatIndexLayer" :sync="true"></toggle-button>
      </div>
      <div class="col-9">
        <div class="row">
          Habitat Index Score
        </div>
        <div class="row" style="padding-top: 5px">
          <div class="col-12">
            <svg height="30">
              <rect id="patch" x="0" y="0" width="35" height="25" style="fill: #a6611a"/>
              <rect id="patch" x="35" y="0" width="35" height="25" style="fill: #dfc27d"/>
              <rect id="patch" x="70" y="0" width="35" height="25" style="fill: #f5f5f5"/>
              <rect id="patch" x="105" y="0" width="35" height="25" style="fill: #80cdc1"/>
              <rect id="patch" x="105" y="0" width="35" height="25" style="fill: #018571"/>
            </svg>
          </div>
        </div>     
      </div>         
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    habitatMetricLayer: {
      get () {
        return this.$store.state.habitatMetricLayer;
      },
      set () {
           this.$store.dispatch('switchHabitatMetricLayer');
      }      
    },
    habitatIndexLayer: {
      get () {
        return this.$store.state.habitatIndexLayer;
      },
      set () {
        this.$store.dispatch('switchHabitatIndexLayer');
      }      
    }
  }
}
</script>

<style>

</style>
