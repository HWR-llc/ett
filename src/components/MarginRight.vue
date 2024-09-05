<template>
  <div>
    <div class="row">
      <app-habitat-graph-header style="width: 100%"></app-habitat-graph-header>
    </div>
    <p></p>
    
    <div class="row" style="text-align: center;" v-if="this.$store.state.habitat == 'diadromous fish'">
      <div class="col-12">
        <b-button class="d-inline" style="background-color: red;" size="sm" title="view large graph for download" v-b-modal.modal-df-graph>
          <b-icon icon="printer" aria-hidden="true"></b-icon>
        </b-button>
        <b-button v-if="fishRun != null" style="margin-left: 5px;" variant="success" class="d-inline" size="sm" title="return to all MassBays assessment areas" @click="allFishRun">
            <b-icon icon="globe" aria-hidden="true"></b-icon>
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
          <div class="row justify-content-center" v-if="true">
            <div class="col-12">
              <app-diadromous-fish-graph-dynamic :gwidth="'100%'" :gheight="'400px'"></app-diadromous-fish-graph-dynamic>
            </div>
          </div>
        </b-modal> 
    </div>
       
    <div class="row" style="text-align: center" v-else>
      <div class="col-12">
        <b-button class="d-inline" style="background-color: red;" size="sm" title="view large graph for download" v-b-modal.modal-hab-graph>
          <b-icon icon="printer" aria-hidden="true"></b-icon>
        </b-button>
        <b-button v-if="this.$store.state.embayment != null" style="margin-left: 5px;" variant="success" class="d-inline" size="sm" title="return to all MassBays assessment areas" @click="allEmbayments">
            <b-icon icon="globe" aria-hidden="true"></b-icon>
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
    },
    allEmbayments() {
      this.$store.dispatch('setEmbayment', null);
    },
    allFishRun() {
      this.$store.dispatch('setFishRun', null);
      this.$store.dispatch('setDFLegendColor', false);
    }
  }
};
</script>

<style scoped>

</style>
