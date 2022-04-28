<template>
  <div class="floater">
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
  }
}
</script>

<style scoped>
.floater {
  width: 400px;
  height: 300px;
  border: solid 1px gray;
  background-color: rgba(255,255,255);
  border-radius: 10px;
  padding: 15px;
}

</style>
