<template>
  <div class="container-fluid" >
    <div class="row" id="top-row">
      <div class="col-12">
        <div class="row justify-content-center">
          <img src="../assets/imgs/landing_page.png" :style="{'width': imageWidth + '%' }">
        </div>
        <br>
        <div class="row justify-content-center text-center">
          <h5>Explore Coastal Habitats and Water Quality <br> in the Massachusetts Bays Region</h5>
        </div>
        <br><br class="d-none d-md-block">
        <div class="d-none d-md-block">
          <div class="row justify-content-center">
            <b-button class="habitat-background no-border" @click="()=>$router.push('explorer')" size="lg"><b>Start Exploring</b></b-button>
          </div>
        </div>
        <div class="row justify-content-center d-md-none">
          <b-alert show variant="warning">Mobile Not Supported. Please come back on a laptop or desktop computer.</b-alert>
        </div>        
        <br class="d-none d-md-block">
        <div class="row justify-content-center"  style="padding-top: 10px">
          <p :style="{'width': textWidth + '%', 'textAlign': textAlign }">
            The <b>Ecohealth Tracking Tool</b> is a gateway for the public, scientists, and policy makers to access information
            about coastal habitats, the water quality conditions that sustain healthy habitats, and the many benefits these habitats provide.
            You'll find data for the entire MassBays region, as well as your favorite beach, salt marsh, or estuary.
            <br>
            Dive in to learn more about efforts to maintain and restore healthy coastal habitats…and how you can help!
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" id="bottom-row">
      <img src="../assets/logos/mass_bays_rect.svg" :style="{'width': iconWidth + '%' }">
    </div>

  </div>
</template>

<script>
export default {
  name: 'IntroView',
  data () {
    return {
      imageWidth: null,
      textWidth: null,
      iconWidth: null,
      textAlign: null

    }
  },
  methods: {
    onResize () {
      if (window.innerWidth < 992) {
        this.imageWidth = 90;
        this.textWidth = 90;
        this.iconWidth = 75;
        this.textAlign = null;
      } else {
        this.imageWidth = 35;
        this.textWidth = 60;
        this.iconWidth = 15;
        this.textAlign = 'center';
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.$nextTick(() => {
      this.onResize();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize); // stop memory leaks;
  }
}

</script>

<style scoped>
#top-row {
  border-top: solid 10px #00A3CC;
  border-bottom: solid 10px #00A3CC;
  background-color: #0F326B;
  color: #FFFFFF;
  padding-top: 25px;
  align: center;
}
#bottom-row {
  padding-top: 25px;
}
</style>
