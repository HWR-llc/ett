<template>
  <div>
    <div class="row" style="padding-top: 25px">
      <div class="col-3">
        <div v-for="(item, key) in habitatImages" :key="key">
          <div v-if="habitat==key">
            <img :src="item.pic" style="max-width: 100%">
          </div>
        </div>      
      </div>
      <div class="col-9 align-bottom">
        <h2 v-if="view=='habitat'">{{ habitat }}</h2>
        <h2 v-else>{{ waterQuality }}</h2>
      </div>
    </div>
    <div class="row">
      <app-habitat-graph v-if="view=='habitat'"></app-habitat-graph>
      <app-water-quality-graph v-if="view=='water quality'"></app-water-quality-graph>
    </div>
    <div v-if="view=='habitat'">
      <div class="row">
        <div class="col-12">
          <h6><u>{{ habitatCapital }} Extent</u></h6>
        </div>
      </div>
      <div class="row">
          <app-base-layer></app-base-layer>
      </div>
      <br>
      <div class="row">
        <app-base-layer></app-base-layer>
      </div>        
      <div class="row">
        <u><h6>{{ habitatCapital }} Metrics</h6></u>
        {{ altHabitat }}
      </div>
      
    </div>
  </div>
</template>

<script>
import { imageLibraryHabitat } from '../lib/constants'
import HabitatGraph from './subs/HabitatGraph.vue'
import WaterQualityGraph from './subs/WaterQualityGraph.vue'
import BaseLayer from './subs/BaseLayer.vue'
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
    appBaseLayer: BaseLayer
  }
}
</script>

<style>

</style>
