<template>
  <div class="floater">
    <div class="row" style="text-align: right; padding-bottom: 5px">
      <div class="col-12" style="padding-right: 5px">
        <b-button-close @click="closeWaterQualityGraph">
          <span aria-hidden="true">&times;</span>
        </b-button-close>
      </div>
    </div>
    <div class="row">
      <app-water-quality-graph-header ></app-water-quality-graph-header>
    </div>
    <div class="row" v-if="true">
      <app-water-quality-graph></app-water-quality-graph>
    </div>
  </div>
</template>

<script>

import WaterQualityGraph from './subs/WaterQualityGraph.vue'
import WaterQualityGraphHeader from './subs/WaterQualityGraphHeader.vue'
export default {
 components: {
    appWaterQualityGraph: WaterQualityGraph,
    appWaterQualityGraphHeader: WaterQualityGraphHeader,
  },
  methods: {
    closeWaterQualityGraph() {
      this.$store.dispatch('offWaterQualityGraph');
    }
  }
}
</script>

<style scoped>
.floater {
  width: 400px;
  height: 320px;
  border: solid 1px gray;
  background-color: rgba(255,255,255);
  border-radius: 10px;
  padding: 15px;
  padding-top: 2px;
}
</style>
