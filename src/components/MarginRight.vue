<template>
  <div>
    <div class="row">
      <app-habitat-graph-header style="width: 100%"></app-habitat-graph-header>
    </div>
    <div class="row" style="text-align: center">
      <div class="col-12">
        <b-button class="d-inline" style="background-color: red;" size="sm" title="view large graph for download" @click="showModalGraph">
          <b-icon icon="printer" aria-hidden="true"></b-icon>
        </b-button>
        <b-button style="margin-left: 5px;" variant="success" class="d-inline" size="sm" title="zoom to all MassBays assessment areas" @click="resetZoom">
            <b-icon icon="globe" aria-hidden="true"></b-icon>
        </b-button>
      </div>
    </div>    
    <div class="row" style="text-align: center" v-if="habitat == 'diadromous fish'">
      <div class="col-12">
        <div class="row" style="text-align: center">
          <div class="col-6" style="padding-right: 0px; padding-left: 0px">
            <app-diadromous-fish-graph style="width: 100%" :dftype="'Migratory'" :exporting="false"></app-diadromous-fish-graph> 
          </div>
          <div class="col-6" style="padding-right: 0px; padding-left: 0px">
            <app-diadromous-fish-graph style="width: 100%" :dftype="'Spawning'" :exporting="false"></app-diadromous-fish-graph> 
          </div>
          <b-modal v-model="showDiadromousFishGraphDynamic" id="modal-df-graph" size="lg" modal-class="thin-top" hide-footer hide-header>
            <div class="row" style="text-align: right">
              <div class="col-12" style="padding-bottom: 5px">
                <b-button-close @click="switchShowDiadromousFishGraphDynamic">
                  <span aria-hidden="true">&times;</span>
                </b-button-close>
              </div>
            </div>
            <div class="row justify-content-center" v-if="true">
              <div class="col-6" style="padding-right: 0px; padding-left: 0px">
                <app-diadromous-fish-graph style="width: 100%" :dftype="'Migratory'" :exporting="true"></app-diadromous-fish-graph> 
              </div>
              <div class="col-6" style="padding-right: 0px; padding-left: 0px">
                <app-diadromous-fish-graph style="width: 100%" :dftype="'Spawning'" :exporting="true"></app-diadromous-fish-graph> 
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </div>     
    <div class="row" style="text-align: center" v-else>
      <app-habitat-graph style="width: 100%" :exporting="false"></app-habitat-graph> 
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
    habitat() {
      return this.$store.state.habitat;
    },
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
    plotHabitatGraph() {
      return this.$store.state.plotHabitatGraph;
    },
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
    allFishRun() {
      this.$store.dispatch('setFishRun', null);
      this.$store.dispatch('setDFLegendColor', false);
    },
    resetZoom() {
      this.$store.dispatch('setEmbayment', null);
      this.$store.dispatch('switchResetZoom');
    },
    showModalGraph() {
      if (this.habitat == 'diadromous fish') {
        this.$store.dispatch('switchShowDiadromousFishGraphDynamic');
      } else {
        this.$store.dispatch('switchShowHabitatGraphDynamic');
      }
    }
  }
};
</script>

<style scoped>

</style>
