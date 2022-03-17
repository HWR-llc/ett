<template>
  <div>
    <div class="row" id="topRow">
      <div class="col-2" id="logoBox">
          <!-- Problem here making image fit -->
          <img src="../assets/logos/ett_square_no_border.png" style="background-color: white; max-height: 80%; margin: auto; display: block">
      </div>
      <div class="col-4">
        <app-header-habitat></app-header-habitat>
      </div>
      <div class="col-6" style="width=50%">
        <app-header-water-quality></app-header-water-quality>
      </div>
    </div>
    <div class="row" id="bottomRow">
      <div class="col-2" style="background-color: transparent">
      </div>
      <div class="col-5">
        Click on a <b>habitat type</b> to see maps and data
      </div>
      <div class="col-5">
        Click on a <b>parameter</b> to view stations... <b>then click stations</b> to see data
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

<style>
#topRow {
  height: 30%;
  max-height: 100px;
  background-color: black;
  padding: 0px;
}

#bottomRow {
  min-height: 20px;
  background-color: lightgreen;
}
#logoBox {
  background-color: white;
}

</style>
