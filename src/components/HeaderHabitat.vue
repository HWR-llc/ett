<template>
  <div>
    <div class="row align-items-center" style="padding-left: 20px">
      <div class="col-2" style="min-width: 100px">    
        <div class="row justify-content-center" style="padding-top: 20px">
          <h6 class="habitat-main">show on map</h6>
        </div>
        <div class="row justify-content-center">
          <toggle-button color="#76DF41" v-model="baseLayer" :sync="true"></toggle-button>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-5">
            <div class="form-check" v-for="selection in habitatSelections.slice(0,2)" :key="selection">
              <input class="form-check-input" type="radio" id="key" :value="selection" v-model="habitat">
              <label class="form-check-label" for="key" style="color: white"> {{selection}} </label>
            </div>
          </div>
          <div class="col-7">
            <div class="form-check" v-for="selection in habitatSelections.slice(2,4)" :key="selection">
              <input class="form-check-input" type="radio" id="key" :value="selection" v-model="habitat">
              <label class="form-check-label" for="key" style="color: white"> {{selection}} </label>
            </div>
          </div>          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { habitatSelections } from '../lib/constants'
export default {
  data () {
    return {
      habitatSelections: habitatSelections,
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
    habitat: {
      get () {
        return this.$store.state.habitat;
      },
      set (newHab) {
        this.$store.dispatch('switchHabitat', newHab);
        this.$store.dispatch('setGraphVariable', newHab);
        this.$store.dispatch('onBaseLayer');
      }      
    }
  }
}
</script>

<style scoped>
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