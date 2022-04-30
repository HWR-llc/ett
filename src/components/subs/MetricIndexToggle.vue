<template>
  <div>
    <!-- Metric Toggle -->
    <div class="row">
      <div class="col-3" style="padding-top: 5px">
        <toggle-button v-model="metricLayer" :sync="true"></toggle-button>
      </div>
      <div class="col-9">
        <div class="row">
          % {{ habitatCapital }} Target
        </div>
        <div class="row" style="padding-top: 5px">
          <div class="col-12">
            <svg height="30">
              <rect id="patch" x="0" y="0" width="35" height="25" style="fill: #86EEC6"/>
              <rect id="patch" x="35" y="0" width="35" height="25" style="fill: #6AC6C0"/>
              <rect id="patch" x="70" y="0" width="35" height="25" style="fill: #50A0BA"/>
              <rect id="patch" x="105" y="0" width="35" height="25" style="fill: #3174B3"/>
              <rect id="patch" x="140" y="0" width="35" height="25" style="fill: #1850AD"/>
            </svg>
          </div>
        </div>     
      </div>         
    </div>
    <!-- Index Toggle -->
    <!-- <div class="row">
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
              <rect id="patch" x="0" y="0" width="35" height="25" style="fill: #86EEC6"/>
              <rect id="patch" x="35" y="0" width="35" height="25" style="fill: #6AC6C0"/>
              <rect id="patch" x="70" y="0" width="35" height="25" style="fill: #50A0BA"/>
              <rect id="patch" x="105" y="0" width="35" height="25" style="fill: #3174B3"/>
              <rect id="patch" x="140" y="0" width="35" height="25" style="fill: #1850AD"/>
            </svg>
          </div>
        </div>     
      </div>         
    </div> -->
  </div>
</template>

<script>
export default {
  computed: {
    habitatCapital() {
      const titles = this.$store.state.habitat.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
    metricLayer: {
      get () {
        return this.$store.state.metricLayer;
      },
      set () {
        console.log('switching metric layer');
        this.$store.dispatch('switchMetricLayer');
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
