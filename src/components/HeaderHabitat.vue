<template>
  <div>
    <div class="row align-items-center" style="padding-left: 20px; flex-wrap: nowrap;">
      <div class="col-2" style="min-width: 100px">    
        <div class="row justify-content-center" style="padding-top: 0px">
          <h6 class="habitat-main-header">Habitats</h6>
        </div>
        <div class="row justify-content-center">
          <toggle-button color="#76DF41" v-model="baseLayer" :sync="true"></toggle-button>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-5">
            <div class="form-check" v-for="selection in habitatSelections.slice(0,2)" :key="selection.id">
              <input class="form-check-input" type="radio" :id="selection.id" :value="selection.id" v-model="habitat">
              <label class="form-check-label" :for="selection.id" style="color: white"> {{selection.capital}} </label>
            </div>
          </div>
          <div class="col-7">
            <div class="form-check" v-for="selection in habitatSelections.slice(2,4)" :key="selection.id">
              <input class="form-check-input" type="radio" :id="selection.id" :value="selection.id" v-model="habitat">
              <label class="form-check-label" :for="selection.id" style="color: white"> {{selection.capital}} </label>
            </div>
            <!-- <div class="form-check" v-for="selection in habitatSelections.slice(3,4)" :key="selection.id">
              <input class="form-check-input" type="radio" :id="selection.id" :value="selection.id" v-model="habitat">
              <label v-b-tooltip.hover class="form-check-label" :for="selection.id" style="color: white" title="Diadromous fish coming soon"> {{selection.capital}} </label>
            </div> -->
          </div>          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { habitatSelections } from '../lib/constants'
import { stateWideHabitatValues } from '../lib/constants'
export default {
  data () {
    return {
      habitatSelections: habitatSelections,
      stateWideHabitatValues: stateWideHabitatValues
    }
  },
  computed: {
    baseLayer: {
      get () {
        return this.$store.state.baseLayer;
      },
      set () {
        this.$store.dispatch('setHabitat', null);
        this.$store.dispatch('switchBaseLayer');
      }      
    },
    embayment() {
      return this.$store.state.embayment;
    },
    habitat: {
      get () {
        return this.$store.state.habitat;
      },
      set (newHab) {
        if (this.embayment == null) {
          this.$store.dispatch('setHabitatGraphData', this.stateWideHabitatValues);
        }
        this.$store.dispatch('setHabitat', newHab);
        this.$store.dispatch('onBaseLayer');
        this.$store.dispatch('offQuickStart');
      }      
    }
  },
  created() {
    const rq = this.$route.query;
    console.log(rq);

    if (rq.habitat) {
      this.$store.dispatch('setHabitat', rq.habitat);
      this.$store.dispatch('onBaseLayer');
      this.$store.dispatch('offQuickStart');
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
.figure {
  cursor: pointer;
}
</style>