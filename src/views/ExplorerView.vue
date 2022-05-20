<template>
  <div class="container-fluid" >
    <app-header-container></app-header-container>
    <div class="row" :style="rowTwoHeightStyle">
      <div class="col-2">
        <app-margin-left></app-margin-left>
      </div>
      <div class="col-7" style="padding-right: 0px; padding-left: 0px">
        
        <app-map-view></app-map-view>
      </div> 
      <div class="col-3" :style="scrollBoxHeightStyle">
        <transition name="fade" mode="out-in">
          <app-margin-instructions v-if="showQuickStart"></app-margin-instructions>
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
    },
    habitatGraphData() {
      return this.$store.state.habitatGraphData;
    },
    showQuickStart() {
      return this.$store.state.showQuickStart;
    }
  },
  methods: {
    onResize () {
      this.rowTwoHeight = window.innerHeight - 100;
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
    window.addEventListener('resize', this.onResize);
    this.rowTwoHeight = window.innerHeight - 100;
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize); // stop memory leaks;
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
