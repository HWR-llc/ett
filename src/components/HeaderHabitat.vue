<template>
  <div>
    <div class="row" style="padding-top: 10px">
      <div class="col-2"  style="padding-left: 20px; padding-top: 20px">    
        <div class="row">
          <h6 class="habitat-main">Habitats</h6>
        </div>
        <div class="row" style="display: block; margin-left: -10px">
          <toggle-button @change="flipHabitat" v-model="habitatOnOff" color="#76DF41" :sync="true"></toggle-button>
        </div>
      </div>
      <div class="col-10" v-if="habitatOnOff==true" id="outer" style="padding-top: 5px">
          <div class="col-3 inner" v-for="(item, key) in habitatImages" :key="key">
            <figure  class="figure"   @click="clicked(key)">
                <img :src="item.pic" class="figure-img" style="width: 60px; padding-right: 5px">
                <figcaption class="figure-caption" style="font-size: 12px">{{ item.title }}</figcaption>
            </figure> 
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