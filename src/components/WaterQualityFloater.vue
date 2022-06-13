<template>
  <div class="floater">
    <div class="row" style="text-align: right">
      <div class="col-2" style="text-align: left; padding-top: 2px">
        <b-button class="narrow-button" style="background-color: #3B8416"  v-b-modal.modal-large-graph :disabled="!plotWaterQualityGraph">
          enlarge
        </b-button>
      </div>
      <div class="col-10" style="padding-bottom: 5px">
        <b-button-close @click="closeWaterQualityGraph">
          <span aria-hidden="true">&times;</span>
        </b-button-close>
      </div>
    </div>
    <div class="row">
      <div class="col-12" style="width: 100%; padding: 0px">
        <app-water-quality-graph-header></app-water-quality-graph-header>
      </div>
    </div>
    <div class="row">
      <app-water-quality-graph :gwidth="'380px'" :gheight="'180px'"></app-water-quality-graph>
    </div>
        <b-modal v-model="showLargeGraph" id="modal-large-graph" size="lg" modal-class="thin-top" hide-footer hide-header>
          <div class="row" style="text-align: right">
            <div class="col-12" style="padding-bottom: 5px">
              <b-button-close @click="switchLargeGraph">
                <span aria-hidden="true">&times;</span>
              </b-button-close>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12" style="width: 100%; padding: 0px">
              <app-water-quality-graph-header></app-water-quality-graph-header>
            </div>
            
          </div>
          <div class="row justify-content-center" v-if="true">
            <div class="col-12">
              <app-water-quality-graph :gwidth="'100%'" :gheight="'400px'"></app-water-quality-graph>
            </div>
          </div>
        </b-modal> 
  </div>
</template>

<script>
import WaterQualityGraph from './subs/WaterQualityGraph.vue'
import WaterQualityGraphHeader from './subs/WaterQualityGraphHeader.vue'
export default {
  data () {
    return {
      buttonText: 'enlarge',
      divWidth: 400,
      divHeight: 320
    }
  },
  computed: {
    plotWaterQualityGraph() {
      return this.$store.state.plotWaterQualityGraph;
    },
    styleObject: function () {
      return {
        width: `${this.divWidth}px`,
        height: `${this.divHeight}px`
      }
    },
    showLargeGraph: {
      get () {
        return this.$store.state.showLargeGraph;
      },
      set () {
        this.$store.dispatch('switchShowLargeGraph');
      }      
    },    
  },
  components: {
    appWaterQualityGraph: WaterQualityGraph,
    appWaterQualityGraphHeader: WaterQualityGraphHeader,
  },
  methods: {
    closeWaterQualityGraph() {
      this.$store.dispatch('offWaterQualityGraph');
      this.$store.dispatch('setStation', null);
    },
    switchLargeGraph() {
      this.$store.dispatch('switchShowLargeGraph');
    }
  }
}
</script>

<style scoped>
.floater {
  width: 400px;
  height: 320px;
  border: solid 1px gray;
  background-color: rgba(255,255,255);
  border-radius: 10px;
  padding: 15px;
  padding-top: 2px;
}
.big-floater {
  /* width: 700px; */
  height: 500px;
  /* border: solid 1px gray; */
  background-color: rgba(255,255,255);
  border-radius: 10px;
  padding: 15px;
  padding-top: 2px;
}
.narrow-button {
  height: 24px;
  font-size: 12px;
  padding: 2px;
  margin: 2px;
}
/deep/ .thin-top {
  padding-top: 0px!important;
}
</style>
