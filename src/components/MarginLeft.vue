<template>
  <div style="height: 100%">
    <br>
    <br>
    <div class="row" style="padding-top: 30px">
      <div class="col">
        <b-button squared class="habitat-background no-border full-width" @click='flipQuickStart'><b>{{showOrHide}} Quick Start Guide</b></b-button> 
      </div>
    </div>
    <div class="row" style="padding-top: 10px">
      <div class="col">
        <b-button squared class="water-quality-background no-border full-width" href="https://www.google.com/" target="_blank"><b>Data Sources</b></b-button>
      </div>
    </div> 

    <!-- <div class="row">
      <div class="col-12">
        <div class="row" style="padding-top: 20px; padding-left: 50px; padding-right: 50px">
          <i>Click on a watershed to zoom and center map or select from the list below <br><u>not active yet</u></i>
        </div>
        <br>
        <br>
        <div class="row">
          <div class="col-12" style="text-align: center">
            <b-form-select v-model="embayment" :options="embaymentList">select a watershed</b-form-select>
          </div>
        </div>
      </div>
    </div> -->
    <br>
    <br>
    <br>
    <div class="row">
      <div class="col-12">
        <b-button variant="outline-primary" v-b-modal.modal-habitat class="full-width">Learn about <b>habitats</b></b-button>
        <b-modal id="modal-habitat" title="Habitat Explanation">
          <p class="my-4">Discussion of relevant habitat goes here</p>
        </b-modal>        
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-12">
        <b-button variant="outline-primary" v-b-modal.modal-habitatTargets class="full-width">Learn about <b>habitat targets</b></b-button>
        <b-modal id="modal-habitatTargets" title="Habitat Targets Explanation">
          <p class="my-4">Discussion of relevant habitat targets goes here</p>
        </b-modal>  
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-12">
        <b-button variant="outline-primary" v-b-modal.modal-waterQuality class="full-width">Learn about <b>water quality parameters</b> </b-button>
        <b-modal id="modal-waterQuality" title="Water Quality Explanation">
          <p class="my-4">Discussion of relevant water quality goes here</p>
        </b-modal> 
      </div>
    </div>
    <br>
    <div class="bottom-spot">
      <a href="https://www.mass.gov/orgs/massachusetts-bays-national-estuary-partnership"  target="_blank">
        <img src="../assets/logos/mass_bays_rect.svg" style="max-width: 85%">
      </a>
    </div>     
  </div>
</template>

<script>


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
