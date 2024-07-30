<template>
  <div>
    <div class="row">
      <app-habitat-graph-header style="width: 100%"></app-habitat-graph-header>
    </div>
    <div class="row" v-if="this.$store.state.habitat == 'diadromous fish'">
      <app-diadromous-fish-graph style="width: 100%"></app-diadromous-fish-graph> 
    </div>
    <div class="row" v-else>
      <app-habitat-graph style="width: 100%"></app-habitat-graph> 
    </div>
    <br>
    <div class="row" style="padding-left: 15px">
      <app-metric-index-toggle></app-metric-index-toggle>
    </div>
  </div>
</template>

<script>
import HabitatGraph from './subs/HabitatGraph.vue'
import DiadromousFishGraph from './subs/DiadromousFishGraph.vue'
import MetricIndexToggle from './subs/MetricIndexToggle.vue'
import HabitatGraphHeader from './subs/HabitatGraphHeader.vue'
// import { fishRunSelections } from '../lib/constants'
import { habitatSelections } from '../lib/constants'
import { waterQualitySelections } from '../lib/constants'
export default {
  data () {
    return {
        habitatSelections: habitatSelections,
        // fishRunSelections: fishRunSelections,
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
    },
    blockHabitatGraph() {
      return this.$store.state.blockHabitatGraph;
    }
  },
  components: {
    appDiadromousFishGraph: DiadromousFishGraph,
    appHabitatGraph: HabitatGraph,
    appMetricIndexToggle: MetricIndexToggle,
    appHabitatGraphHeader: HabitatGraphHeader,
  }
}
</script>

<style scoped>

</style>
