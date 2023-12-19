<template>
  <div style="height: 100%">
    <br>
    <br>
    <br>
    <div class="row" style="padding-top: 30px">
      <div class="col">
        <b-button squared class="habitat-background no-border full-width" @click='flipQuickStart'><b>{{showOrHide}} Quick Start Guide</b></b-button> 
      </div>
    </div>
    <div class="row" style="padding-top: 10px">
      <div class="col-12">
        <b-button squared v-b-modal.modal-data-sources class="water-quality-background no-border full-width"><b>Data Sources</b></b-button>
        <b-modal id="modal-data-sources" title="Data Sources" size="xl" hide-footer>
          <app-learn-data-sources></app-learn-data-sources>
        </b-modal>        
      </div>
    </div> 
    <br>
    <br>
    <div class="row">
      <div class="col-12">
        <b-button variant="outline-primary" v-b-modal.modal-habitat class="full-width">Learn About <b>Habitats</b></b-button>
        <b-modal id="modal-habitat" title="Learn About..." size="lg" hide-footer>
          <app-learn-habitat></app-learn-habitat>
        </b-modal>        
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-12">
        <b-button variant="outline-primary" v-b-modal.modal-habitatGoals class="full-width">Learn About <b>Habitat Goals</b></b-button>
        <b-modal id="modal-habitatGoals" title="Learn About..." size="lg" hide-footer>
          <app-learn-habitat-goals></app-learn-habitat-goals>
        </b-modal>  
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-12">
        <b-button variant="outline-primary" v-b-modal.modal-waterQuality class="full-width">Learn About <b>Water Quality Parameters</b> </b-button>
        <b-modal id="modal-waterQuality" title="Learn About..." size="xl" hide-footer>
          <app-learn-water-quality></app-learn-water-quality>
        </b-modal> 
      </div>
    </div>
    <br>
    <div class="bottom-spot">
      <a href="https://www.mass.gov/orgs/massachusetts-bays-national-estuary-partnership"  target="_blank">
        <img src="../assets/logos/mass_bays_rect.svg" style="max-width: 85%" alt="MassBays logo">
      </a>
    </div>     
  </div>
</template>

<script>

import LearnHabitat from './subs/LearnHabitat.vue'
import LearnHabitatGoals from './subs/LearnHabitatGoals.vue'
import LearnWaterQuality from './subs/LearnWaterQuality.vue'
import LearnDataSources from './subs/LearnDataSources.vue'
export default {
  data () {
    return {
      embaymentList: [
        {value: null, text: 'select a watershed'},
        {value: 'embayment 1', text: 'embayment 1'},  
        {value: 'embayment 2', text: 'embayment 2'},  
        {value: 'embayment 3', text: 'embayment 3'},  
        {value: 'embayment 4', text: 'embayment 4'},  
        {value: 'embayment 5', text: 'embayment 5'},  
        {value: 'embayment 6', text: 'embayment 6'},        
      ]
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    embayment: {
      get () {
        return this.$store.state.embayment;
      },
      set (newEmb) {
        this.$store.dispatch('setEmbayment', newEmb);
      }    
    },
    showQuickStart() {
      return this.$store.state.showQuickStart;
    },
    showOrHide() {
      if (this.showQuickStart == true) {
        return 'Hide';
      } else {
        return 'Show';
      }
    }
  },
  methods: {
    flipQuickStart() {
      if (this.showQuickStart == true) {
        this.$store.dispatch('offQuickStart');        
      } else {
        this.$store.dispatch('onQuickStart');        
      }
    }
  },
  components: {
    appLearnHabitat: LearnHabitat,
    appLearnHabitatGoals: LearnHabitatGoals,
    appLearnWaterQuality: LearnWaterQuality,
    appLearnDataSources: LearnDataSources
  }

}
</script>

<style scoped>
.full-width {
  width: 100%;
}

#outer {
  width:100%;
  text-align: center;
}
.inner {
  width: 100%;
  display: inline-block;
}
.bottom-spot {
  position: absolute;
  bottom: 1%;
  left: 7.5%;
}
</style>
