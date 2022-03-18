<template>
  <div>
    <div class="row">
      <div v-if="view=='habitat'">
        <div v-for="(item, key) in habitatImages" :key="key">
          <div v-if="habitat==key">
            <img :src="item.img" style="max-width: 100%">
            <h3 class="overlay-text">{{ item.title }}</h3>
            <img :src="item.pic" style="max-width: 22%" class="overlay-icon">
          </div>
        </div>      
        <app-habitat-description></app-habitat-description>
        <hr>
      </div>
      <div v-if="view=='water quality'">
        <div style="max-width: 100%; height: 95px; background-color: gray">
        </div>
        <h3 class="overlay-text">{{ waterQuality }}</h3>
        <app-water-quality-description v-if="view=='water quality'"></app-water-quality-description>

        <hr>
      </div>

        

    </div>
    <div class="row">
      <div id="outer">
        <div class="inner">
          <b-button squared class="salt-marsh-background" href="https://www.google.com/" target="_blank">About</b-button>
          <b-button squared class="tidal-flats-background" href="https://www.google.com/" target="_blank">MassBays<br>Region</b-button>
        </div>
      </div>
      <div id="outer">
        <div class="inner">
            <b-button squared class="eelgrass-background" href="https://www.google.com/" target="_blank">References</b-button>
            <b-button squared class="diadromous-background" href="https://www.google.com/" target="_blank">Metadata</b-button>         
        </div>
      </div>      

    </div>
    <div class="row">
      <img src="../assets/logos/mass_bays_rect.png" style="max-width: 100%">

    </div>    



  </div>
</template>

<script>
import { habitatSelections } from '../lib/constants'
import { imageLibraryHabitat } from '../lib/constants'
import HabitatDescription from './subs/HabitatDescription.vue'
import WaterQualityDescription from './subs/WaterQualityDescription.vue'
export default {
  data () {
    return {
      habitatSelections: habitatSelections,
      habitatImages: imageLibraryHabitat
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    view() {
      return this.$store.state.view;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    }
  },
  components: {
    appHabitatDescription: HabitatDescription,
    appWaterQualityDescription: WaterQualityDescription
  }
}
</script>

<style>
.btn {
  font-size: 12px;
  border: 0px;
  margin: 1px;
  height: 40px;
  width: 45%;
}

#outer {
  width:100%;
  text-align: center;
}
.inner {
  width: 100%;
  display: inline-block;
}

.overlay-text {
  position: absolute;
  top: 28px;
  left: 6px;
  color: white;
}
.overlay-icon {
  position: absolute;
  top: 20px;
  right: 5px;
}

</style>
