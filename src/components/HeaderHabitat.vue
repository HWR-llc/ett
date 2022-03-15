<template>
  <div>
    <div class="row" style="padding-top: 10px">
      <div class="col-3"  style="padding-left: 40px; padding-top: 20px">    
        <div class="row">
          <h5 class="habitat-main">Habitats</h5>
        </div>
        <div>
          <toggle-button @change="flipHabitat" :value="habitatOnOff" color="#76DF41"></toggle-button>
        </div>
      </div>
      <div class="col-9" v-if="habitatOnOff==true" id="outer">
          <div class="row">
            <div class="col-3" v-for="(item, key) in habitatImages" :key="key">
              <figure  class="figure"   @click="clicked(key)">
                  <img :src="item.pic" class="figure-img" style="max-width: 75%">
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
    habitatOnOff() {
      if (this.$store.state.view == 'habitat') {
        return true
      } else {
        return false
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
    flipHabitat() {
      this.$store.dispatch('switchView');
    },
    clicked(newHab) {
      this.$store.dispatch('switchHabitat', newHab);
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