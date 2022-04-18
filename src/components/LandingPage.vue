<template>
  <div>
    <b-modal id="landing"
             size="xl"
             title="Splash"
             cancel-title="Enter" 
             ok-title="About" 
             hide-header="true" 
             hide-footer="true" 
             no-close-on-backdrop="true" 
             no-close-on-esc="true">
      <b-container fluid>
        <div class="row" >
          <div class="col-12">
            <div class="row justify-content-center">
              <h4>Explore Coastal Habitats and Water Quality</h4>
            </div>
            <br>
            <div class="row justify-content-center">
              <img src="../assets/imgs/landing_page.jpg" :style="parentHeightStyle">
            </div>
            <br>
            <div class="row justify-content-center">
              <b-button squared class="water-quality-background no-border" href="https://www.google.com/" target="_blank"><b>About</b></b-button>
              <b-button squared @click="enter" class="habitat-background no-border"><b>Enter</b></b-button>
            </div>
            <br>
            <div class="row justify-content-center">
              <img src="../assets/logos/mass_bays_rect.svg" style="max-width: 30%">
            </div>
          </div>
        </div>
        
      </b-container>
      
    </b-modal>
  </div>
</template>

<script>
    
export default {
  data () {
    return {
        parentHeightStyle: null
    }
  },
  methods: {
    enter() {
      this.$bvModal.hide('landing');
    }
  },
  mounted() {
    this.parentHeightStyle = 'height: ' + Math.floor(this.$el.parentElement.clientHeight * 0.46) + 'px';
    console.log(this.parentHeightStyle);
    this.$bvModal.show('landing');
  }

}
</script>

<style>
/* .custom-back {
  border-top: 10px solid #00A3CC;
  background-color: #0F326B;
}

.bottom-row {
  width: 100%;
  border-top: 10px solid #00A3CC;
  background-color: white;
} */
</style>
