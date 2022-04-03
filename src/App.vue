<template>
  
  <div class="container-fluid" >
    <app-header-container></app-header-container>
    <div class="row">
      <div class="col-2">
        <app-margin-left></app-margin-left>
      </div>
      <div class="col-7" style="padding-right: 0px; padding-left: 0px">
        <app-map-view></app-map-view>
        <br>
        <br>
        <p><b>water quality:</b> {{ waterQuality }}</p>
        <p><b>habitat:</b> {{ habitat }}</p>
        <p><b>station:</b> {{ station }}</p>
        <p><b>embayment:</b> {{ embayment }}</p>        
        <p><b>graph variable:</b> {{ graphVariable }}</p>
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
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    habitat() {
      return this.$store.state.habitat;
    },
    graphVariable() {
      return this.$store.state.graphVariable;
    },
    station() {
      return this.$store.state.station;
    },
    embayment() {
      return this.$store.state.embayment;
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

