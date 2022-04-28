<template>
  <div class="container-fluid" >
    <app-header-container></app-header-container>
    <div class="row" :style="rowTwoHeightStyle">
      <div class="col-2">
        <app-margin-left></app-margin-left>
      </div>
      <div class="col-7" style="padding-right: 0px; padding-left: 0px">
        
        <app-map-view></app-map-view>

        <!-- <br>
        <br>
        <p><b>water quality:</b> {{ waterQuality }}</p>
        <p><b>habitat:</b> {{ habitat }}</p>
        <p><b>station:</b> {{ station }}</p>
        <p><b>embayment:</b> {{ embayment }}</p>        
        <p><b>graph variable:</b> {{ graphVariable }}</p>
        <p><b>show base layer:</b> {{ baseLayer }} </p>
        <p><b>show points layer:</b> {{ pointsLayer }} </p>
        <p><b>show habitat metric layer:</b> {{ habitatMetricLayer }} </p>
        <p><b>show habitat index layer:</b> {{ habitatIndexLayer }} </p> -->

      </div> 
      <div class="col-3" :style="scrollBoxHeightStyle">
        <transition name="fade" mode="out-in">
          <app-margin-instructions v-if="waterQuality == null && habitat == null"></app-margin-instructions>
          <app-margin-right v-else></app-margin-right>
        </transition>
      </div>      
    </div>
    <app-modal-start></app-modal-start>
  </div>
</template>

<script>
import HeaderContainer from '../components/HeaderContainer.vue'
import MarginLeft from '../components/MarginLeft.vue'
import MarginRight from '../components/MarginRight.vue'
import MarginInstructions from '../components/MarginInstructions.vue'
import MapView from '../components/MapView.vue'
import ModalStart from '../components/ModalStart.vue'
export default {
  name: 'ExplorerView',
  data () {
    return {
      rowTwoHeight: null
    }
  },
  computed: {
    rowTwoHeightStyle() {
      return 'height: ' + Math.floor(this.rowTwoHeight) + 'px';
    },
    scrollBoxHeightStyle() {
      return 'height: ' + Math.floor(this.rowTwoHeight) + 'px; overflow-y: scroll; overflow-x: hidden';
    },
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
    appMarginInstructions: MarginInstructions,
    appMapView: MapView,
    appModalStart: ModalStart
  },
  mounted() {
    this.rowTwoHeight = window.innerHeight - 100
  }
}
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 500ms;
    }

    .fade-leave {
        /*opacity: 1;*/
    }

    .fade-leave-active {
        transition: opacity 500ms;
        opacity: 0;
    }
</style>
