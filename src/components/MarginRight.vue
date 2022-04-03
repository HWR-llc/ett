<template>
  <div>
    <div class="row">
      <app-water-quality-graph-header v-if="waterQualitySelections.includes(graphVariable)"></app-water-quality-graph-header>
      <app-habitat-graph-header v-if="habitatSelections.includes(graphVariable)"></app-habitat-graph-header>
      <div v-if="habitat == null && waterQuality == null" style="width: 100%; height: 90px; background-color: white">
      </div>
    </div>
    <div class="row">
      <app-habitat-graph></app-habitat-graph>
    </div>
    <br>
    <div class="row">
      <u><h6>Watershed Embayment Metrics</h6></u>
    </div>
    <div class="row">
      <app-metric-index-toggle></app-metric-index-toggle>
    </div>
    <div class="row">
      <u><h6>More Information...</h6></u>
    </div>
    <div class="row" v-if="habitat != null">
      <div class="col-6">
        <b-button variant="outline-primary" v-b-modal.modal-habitat>Learn about <b>{{ habitat }}</b></b-button>
        <b-modal id="modal-habitat" title="Habitat Explanation">
          <p class="my-4">Discussion of relevant habitat goes here</p>
        </b-modal>        
      </div>
      <div class="col-6">
        <b-button variant="outline-primary" v-b-modal.modal-habitatTargets>Learn about habitat targets</b-button>
        <b-modal id="modal-habitatTargets" title="Habitat Targets Explanation">
          <p class="my-4">Discussion of relevant habitat targets goes here</p>
        </b-modal>  
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-6"  v-if="waterQuality != null">
        <b-button variant="outline-primary" v-b-modal.modal-waterQuality>Learn about <b>{{ waterQuality }}</b></b-button>
        <b-modal id="modal-waterQuality" title="Water Quality Explanation">
          <p class="my-4">Discussion of relevant water quality goes here</p>
        </b-modal> 
      </div>
      <div class="col-6"  v-if="habitatIndexLayer == true">
        <b-button variant="outline-primary" v-b-modal.modal-habitatIndices>Learn about habitat indices</b-button>
        <b-modal id="modal-habitatIndices" title="Habitat Index Explanation">
          <p class="my-4">Discussion of relevant habitat indices goes here</p>
        </b-modal> 
      </div>
    </div>
  </div>
</template>

<script>
import HabitatGraph from './subs/HabitatGraph.vue'
// import WaterQualityGraph from './subs/WaterQualityGraph.vue'
import MetricIndexToggle from './subs/MetricIndexToggle.vue'
import HabitatGraphHeader from './subs/HabitatGraphHeader.vue'
import WaterQualityGraphHeader from './subs/WaterQualityGraphHeader.vue'
import { habitatSelections } from '../lib/constants'
import { waterQualitySelections } from '../lib/constants'
export default {
  data () {
    return {
        habitatSelections: habitatSelections,
        waterQualitySelections: waterQualitySelections
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    graphVariable() {
      return this.$store.state.graphVariable;
    },
    habitatCapital() {
      const titles = this.$store.state.habitat.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    habitatIndexLayer() {
      return this.$store.state.habitatIndexLayer;
    }
  },
  components: {
    appHabitatGraph: HabitatGraph,
    // appWaterQualityGraph: WaterQualityGraph,
    appMetricIndexToggle: MetricIndexToggle,
    appHabitatGraphHeader: HabitatGraphHeader,
    appWaterQualityGraphHeader: WaterQualityGraphHeader
  }
}
</script>

<style scoped>
.btn {
  border: 2px solid;
  border-radius: 10px;
  height: 100%;
  width: 100%;
}

</style>
