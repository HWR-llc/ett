<template>
  
  <div class="container-fluid" >
    <app-header-container></app-header-container>
    <div class="row">
      <div class="col-2">
        <app-margin-left></app-margin-left>
      </div>
      <div class="col-7">
        <app-map-view></app-map-view>
        <br>
        <br>
        <p><b>view:</b> {{ view }}</p>
        <p><b>water quality:</b> {{ waterQuality }}</p>
        <p><b>habitat:</b> {{ habitat }}</p>
        <p><b>show base layer:</b> {{ baseLayer }} </p>
        <p><b>show points layer:</b> {{ pointsLayer }} </p>
        <p><b>show habitat metric layer:</b> {{ habitatMetricLayer }} </p>
        <p><b>show habitat index layer:</b> {{ habitatIndexLayer }} </p>
      </div> 
      <div class="col-3">
        <app-margin-right></app-margin-right>
      </div>      
    </div>
  </div>
</template>

<script>
import HeaderContainer from './components/HeaderContainer.vue'
import MarginLeft from './components/MarginLeft.vue'
import MarginRight from './components/MarginRight.vue'
import MapView from './components/MapView.vue'
export default {
  name: 'App',
  computed: {
    view() {
      return this.$store.state.view;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    habitat() {
      return this.$store.state.habitat;
    },
    baseLayer() {
      return this.$store.state.baseLayer;
    },
    pointsLayer() {
      return this.$store.state.pointsLayer;
    },
    habitatMetricLayer() {
      return this.$store.state.habitatMetricLayer;
    },
    habitatIndexLayer() {
      return this.$store.state.habitatIndexLayer;
    }
  },
  components: {
    appHeaderContainer: HeaderContainer,
    appMarginLeft: MarginLeft,
    appMarginRight: MarginRight,
    appMapView: MapView   
  }
}
</script>

<style>

</style>

