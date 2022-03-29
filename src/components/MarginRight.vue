<template>
  <div>
    <div class="row">
      <app-habitat-graph v-if="view=='habitat'"></app-habitat-graph>
      <app-water-quality-graph v-if="view=='water quality'"></app-water-quality-graph>
    </div>

    <!-- <div class="row">
      <div class="col-12">
        <h6><u>{{ habitatCapital }} Extent</u></h6>
      </div>
    </div>
    <div class="row">
        <app-base-layer :time="'current'"></app-base-layer>
    </div>
    <br>
    <div class="row">
      <app-base-layer :time="'historic'"></app-base-layer>
    </div>         -->
    <br>
    <div class="row">
      <u><h6>Watershed Embayment Metrics</h6></u>
    </div>
    <div class="row">
          <app-metric-index-toggle></app-metric-index-toggle>
      </div>
  </div>
</template>

<script>
import { imageLibraryHabitat } from '../lib/constants'
import HabitatGraph from './subs/HabitatGraph.vue'
import WaterQualityGraph from './subs/WaterQualityGraph.vue'
import MetricIndexToggle from './subs/MetricIndexToggle.vue'
export default {
  data () {
    return {
        habitatImages: imageLibraryHabitat
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    habitatCapital() {
      const titles = this.$store.state.habitat.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
    view() {
      return this.$store.state.view;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    }
  },
  components: {
    appHabitatGraph: HabitatGraph,
    appWaterQualityGraph: WaterQualityGraph,
    appMetricIndexToggle: MetricIndexToggle
  }
}
</script>

<style>

</style>
