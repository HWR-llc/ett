<template>
  <div>
    <div class="row">
      <div class="col-1" style="min-width: 100px">    
        <div class="row justify-content-center" style="padding-top: 20px">
          <h6 class="habitat-main">show on map</h6>
        </div>
        <div class="row justify-content-center">
          <toggle-button color="#76DF41" v-model="baseLayer" :sync="true"></toggle-button>
        </div>
      </div>
      <div class="col-7" id="outer">
        <div class="row">
          <div class="col-3 inner" v-for="(item, key) in habitatImages" :key="key" style="min-width: 100px">
            <figure  class="figure"   @click="clicked(key)">
                <img :src="item.pic" class="figure-img" style="width: 60px">
                <figcaption class="figure-caption">{{ item.title }}</figcaption>
            </figure> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imageLibraryHabitat } from '../lib/constants'
export default {
  data () {
    return {
      habitatImages: imageLibraryHabitat
    }
  },
  computed: {
    baseLayer: {
      get () {
        return this.$store.state.baseLayer;
      },
      set () {
        this.$store.dispatch('switchBaseLayer');
      }      
    },
    habitat() {
      return this.$store.state.habitat;
    },
    view() {
      return this.$store.state.view;
    }
  },
 methods: {
    clicked(newHab) {
      this.$store.dispatch('switchHabitat', newHab);
      this.$store.dispatch('activateHabitat')
    }
 }
}
</script>

<style>
#outer {
  width:100%;
  text-align: center;
}
.inner {
  width: 100%;
  display: inline-block;
}
.figure-caption {
  color: white;
}
.v-switch-core {
  /* background-color: red !important; */
}
.figure {
  cursor: pointer;
}
</style>