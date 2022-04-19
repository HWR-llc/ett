<template>
  <div>
    {{ activeTab }}
    <div class="row">
      <b-tabs pills end justified v-model="activeTab" style="width: 100%">
        <b-tab title="Habitat" :disabled="disableHabitatTab" active>
          <app-habitat-graph-header></app-habitat-graph-header>
          <app-habitat-graph></app-habitat-graph>
        </b-tab>
        <b-tab title="Water Quality" :disabled="disableWaterQualityTab">
          <app-water-quality-graph-header></app-water-quality-graph-header>
          <app-water-quality-graph></app-water-quality-graph>
        </b-tab>  
      </b-tabs>      
    </div>
    <br>
    <div class="row" style="padding-left: 15px">
      <u><h6>Watershed Embayment Metrics</h6></u>
    </div>
    <div class="row" style="padding-left: 15px">
      <app-metric-index-toggle></app-metric-index-toggle>
    </div>
  </div>
</template>

<script>
import HabitatGraph from './subs/HabitatGraph.vue'
import WaterQualityGraph from './subs/WaterQualityGraph.vue'
import MetricIndexToggle from './subs/MetricIndexToggle.vue'
import HabitatGraphHeader from './subs/HabitatGraphHeader.vue'
import WaterQualityGraphHeader from './subs/WaterQualityGraphHeader.vue'
import { habitatSelections } from '../lib/constants'
import { waterQualitySelections } from '../lib/constants'
export default {
  data () {
    return {
        habitatSelections: habitatSelections,
        waterQualitySelections: waterQualitySelections,
        activeTab: null,
        disableHabitatTab: null,
        disableWaterQualityTab: null
    }
  },
  computed: {
    habitatCapital() {
      const titles = this.$store.state.habitat.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
    habitatIndexLayer() {
      return this.$store.state.habitatIndexLayer;
    }
  },
  watch: {
    "$store.state.habitat"() {
      if (this.$store.state.habitat == null) {
        this.disableHabitatTab = true;
      } else {
        this.disableHabitatTab = false;
        this.activeTab = 0;
        console.log(this.activeTab);
      }
    },
    "$store.state.waterQuality"() {
      if (this.$store.state.waterQuality == null) {
        this.disableWaterQualityTab = true;
      } else {
        this.disableWaterQualityTab = false;
        this.activeTab = 1;
        console.log(this.activeTab);
      }
    }
  },
  components: {
    appHabitatGraph: HabitatGraph,
    appWaterQualityGraph: WaterQualityGraph,
    appMetricIndexToggle: MetricIndexToggle,
    appHabitatGraphHeader: HabitatGraphHeader,
    appWaterQualityGraphHeader: WaterQualityGraphHeader
  },
  mounted() {
    if ((this.$store.state.habitat != null) && (this.$store.state.waterQuality == null)) {
      this.disableHabitatTab = false;
      this.disableWaterQualityTab = true;
      this.activeTab = 0;
      } else if ((this.$store.state.habitat == null) && (this.$store.state.waterQuality != null)) {
      this.disableHabitatTab = true;
      this.disableWaterQualityTab = false;
      this.activeTab = 1;
    }
  } 
}
</script>

<style scoped>
.btn {
  border: 2px solid;
  border-radius: 10px;
  height: 100%;
  width: 100%;
}

</style>
