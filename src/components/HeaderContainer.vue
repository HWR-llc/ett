<template>
  <div>
    <div class="row" id="topRow">
      <div class="col-2" id="logoBox">
          <!-- Problem here making image fit -->
          <img src="../assets/logos/ett_square_no_border.png" style="background-color: white; max-height: 80%; margin: auto; display: block">
      </div>
      <div class="col-10">
        <div class="row" style="padding-top: 10px">
          <div class="col-12">
              <b-tabs pills vertical fill  :active-nav-item-class="classObject">
                <b-tab title="Habitat" active><app-header-habitat></app-header-habitat></b-tab>
                <b-tab title="Water Quality"><app-header-water-quality></app-header-water-quality></b-tab>
              </b-tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="bottomRow">
      <div class="col-2" style="background-color: transparent">
      </div>
      <div class="col-10">
        In Habitat, click on a <b>habitat type</b> to see maps and data...and in Water Quality, click on a <b>parameter</b> to view stations, <b>then click stations</b> to see data
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
.light-up {
  background-color: gray !important;
}

</style>
