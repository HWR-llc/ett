<template>
  <div>
    <div class="row" id="topRow">
      <div class="col-2" id="logoBox">
          <!-- Problem here making image fit -->
          <router-link to="/"><img src="../assets/logos/ett_square_no_border.svg" style="background-color: white; width: 90%; max-height: 150px; margin: auto; display: block"></router-link>
      </div>
      <div class="col-4" style="padding-top: 15px">
        <app-header-habitat></app-header-habitat>
      </div>
      <div class="col-6" style="padding-top: 15px">
        <app-header-water-quality></app-header-water-quality>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHabitat from './HeaderHabitat.vue'
import HeaderWaterQuality from './HeaderWaterQuality.vue'
export default {
  components: {
    appHeaderHabitat: HeaderHabitat,
    appHeaderWaterQuality: HeaderWaterQuality
  }
}
</script>

<style scoped>
#topRow {
  height: 100px;
  /* height: 30%; */
  /* max-height: 100px; */
  background-color: black;
  padding: 0px;
}

#logoBox {
  background-color: white;
}
.light-up {
  background-color: gray !important;
}

</style>
