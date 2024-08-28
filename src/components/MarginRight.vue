<template>
  <div>
    <div class="row">
      <app-habitat-graph-header style="width: 100%"></app-habitat-graph-header>
    </div>
    
    <div class="row" style="text-align: center;" v-if="this.$store.state.habitat == 'diadromous fish'">
      <div class="col-12">
        <b-button class="narrow-button" style="background-color: red" title="view large graph for printing" v-b-modal.modal-df-graph>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
          </svg>
        </b-button>
      </div>
      <app-diadromous-fish-graph style="width: 100%"></app-diadromous-fish-graph> 
     
      <b-modal v-model="showDiadromousFishGraphDynamic" id="modal-df-graph" size="lg" modal-class="thin-top" hide-footer hide-header>
          <div class="row" style="text-align: right">
            <div class="col-12" style="padding-bottom: 5px">
              <b-button-close @click="switchShowDiadromousFishGraphDynamic">
                <span aria-hidden="true">&times;</span>
              </b-button-close>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12" style="width: 100%; padding: 0px">
              <app-habitat-graph-header></app-habitat-graph-header>
            </div>
          </div>
          <div class="row justify-content-center" v-if="true">
            <div class="col-12">
              <app-diadromous-fish-graph-dynamic :gwidth="'100%'" :gheight="'400px'"></app-diadromous-fish-graph-dynamic>
            </div>
          </div>
        </b-modal> 
    </div>
       
    <div class="row" style="text-align: center" v-else>
      <div class="col-12">
        <b-button class="narrow-button" title="view large graph for filtering/printing" style="background-color: red; text-align: center" v-b-modal.modal-hab-graph>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16"> -->
              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
          </svg>
        </b-button>
      </div>
      <div class="col-10" style="padding-bottom: 5px" v-if="showHabitatGraphDynamic">
        <b-button-close @click="closeHabitatGraphDynamic">
          <span aria-hidden="true">&times;</span>
        </b-button-close>
      </div>
      <app-habitat-graph style="width: 100%"></app-habitat-graph> 
      <b-modal v-model="showHabitatGraphDynamic" id="modal-hab-graph" size="lg" modal-class="thin-top" hide-footer hide-header>
          <div class="row" style="text-align: right">
            <div class="col-12" style="padding-bottom: 5px">
              <b-button-close @click="switchHabitatGraphDynamic">
                <span aria-hidden="true">&times;</span>
              </b-button-close>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12" style="width: 100%; padding: 0px">
              <app-habitat-graph-header></app-habitat-graph-header>
            </div>
          </div>
          <div class="row justify-content-center" v-if="true">
            <div class="col-12">
              <app-habitat-graph-dynamic :gwidth="'100%'" :gheight="'400px'"></app-habitat-graph-dynamic>
            </div>
          </div>
        </b-modal> 
    </div>
    <br>
    <div class="row" style="padding-left: 15px">
      <app-metric-index-toggle></app-metric-index-toggle>
    </div>
  </div>
</template>

<script>
import HabitatGraph from './subs/HabitatGraph.vue'
import DiadromousFishGraph from './subs/DiadromousFishGraph.vue'
import HabitatGraphDynamic from './subs/HabitatGraphDynamic.vue'
import DiadromousFishGraphDynamic from './subs/DiadromousFishGraphDynamic.vue'
import MetricIndexToggle from './subs/MetricIndexToggle.vue'
import HabitatGraphHeader from './subs/HabitatGraphHeader.vue'
import { habitatSelections } from '../lib/constants'
import { waterQualitySelections } from '../lib/constants'
export default {
  data () {
    return {
        habitatSelections: habitatSelections,
        waterQualitySelections: waterQualitySelections,
        activeTab: null,
        disableHabitatTab: null,
        disableWaterQualityTab: null
    }
  },
  computed: {
    habitatCapital() {
      const titles = this.$store.state.habitat.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
    fishRun() {
      return this.$store.state.fishRun;
    },
    habitatIndexLayer() {
      return this.$store.state.habitatIndexLayer;
    },
    blockHabitatGraph() {
      return this.$store.state.blockHabitatGraph;
    },
    plotDiadromousFishGraph() {
      return this.$store.state.plotFishRunGraph;
    },
    // plotDiadromousFishGraphDynamic() {
    //   return this.$store.state.plotDiadromousFishGraphDynamic;
    // },
    plotHabitatGraph() {
      return this.$store.state.plotHabitatGraph;
    },
    // plotHabitatGraphDynamic() {
    //   return this.$store.state.plotHabitatGraphDynamic;
    // },
    showHabitatGraphDynamic: {
      get () {
        return this.$store.state.showHabitatGraphDynamic;
      },
      set () {
        this.$store.dispatch('switchShowHabitatGraphDynamic');
      }      
    },
    showDiadromousFishGraphDynamic: {
      get () {
        return this.$store.state.showDiadromousFishGraphDynamic;
      },
      set () {
        this.$store.dispatch('switchShowDiadromousFishGraphDynamic');
      }      
    }
  },
  components: {
    appDiadromousFishGraph: DiadromousFishGraph,
    appDiadromousFishGraphDynamic: DiadromousFishGraphDynamic,
    appHabitatGraph: HabitatGraph,
    appHabitatGraphDynamic: HabitatGraphDynamic,
    appMetricIndexToggle: MetricIndexToggle,
    appHabitatGraphHeader: HabitatGraphHeader,
  },
  methods: {
    switchHabitatGraphDynamic() {
      this.$store.dispatch('switchShowHabitatGraphDynamic');
    },
    switchShowDiadromousFishGraphDynamic() {
      this.$store.dispatch('switchShowDiadromousFishGraphDynamic');
    }
  }
};
</script>

<style scoped>

</style>
