<template>
  <div>
    <div class="row" style="padding-top: 10px">
      <div class="col-3"  style="padding-left: 40px; padding-top: 20px">    
        <div class="row">
          <h6 class="water-quality-main">Water Quality</h6>
        </div>
        <div class="row" style="display: block; margin-left: auto; margin-right: auto">
            <toggle-button @change="flipHabitat" v-model="waterQualityOnOff" color="#00B0F0" :sync="true"></toggle-button>
        </div>
      </div>
      <div v-if="waterQualityOnOff==true" class="row">
        <div class="col-3">
          <div class="form-check" v-for="selection in waterQualitySelections.slice(0,3)" :key="selection">
            <input class="form-check-input" type="radio" id="key" :value="selection" v-model="waterQuality">
            <label class="form-check-label" for="key" style="color: white"> {{selection}} </label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-check" v-for="selection in waterQualitySelections.slice(3,6)" :key="selection">
            <input class="form-check-input" type="radio" id="key" :value="selection" v-model="waterQuality">
            <label class="form-check-label" for="key" style="color: white"> {{selection}} </label>
          </div>
        </div>
        <div class="col-5">
          <div class="form-check" v-for="selection in waterQualitySelections.slice(6,9)" :key="selection">
            <input class="form-check-input" type="radio" id="key" :value="selection" v-model="waterQuality">
            <label class="form-check-label" for="key" style="color: white"> {{selection}} </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { waterQualitySelections } from '../lib/constants'
export default {
  data () {
    return {
      waterQualitySelections: waterQualitySelections,
      selWq: null
    }
  },
  computed: {
    waterQualityOnOff() {
      if (this.$store.state.view == 'habitat') {
        return false
      } else {
        return true
      }
    },
    waterQuality: {
      get () {
        return this.$store.state.waterQuality;
      },
      set (newWq) {
        this.$store.dispatch('switchWaterQuality', newWq);
      }      
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

</style>