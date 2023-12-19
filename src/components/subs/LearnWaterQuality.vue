<template>
  <div>
    <div class="row justify-content-center">
      <h2>Water Quality Parameters</h2>
    </div>
    <div v-for="(item, key) in imageLibraryWaterQuality" :key="key">
      <div class="row">
        <div class="col-1 my-auto justify-content-center" style="min-width: 90px; padding-left: 40px">
          <img :src="item.pic" style="max-width: 55px" :alt="'water quality parameter icon for ' + key ">
        </div>
        <div class="col-10">
          <p>
            <b class="water-quality-main">{{ item.title }}: </b><span v-html="item.explanation"></span>
          </p>
        </div>
      </div>     
    </div>
    <br>
    <div class="row justify-content-center">
      <b-button variant="secondary" v-b-modal.modal-dataSources class="diadromous-background rounded-0">Click here for more information on <br><b>water quality parameter thresholds</b><br> used in the Ecohealth Tracking Tool.</b-button>
      <b-modal id="modal-dataSources" title="Data Sources" size="lg" hide-footer>
        <app-learn-data-sources></app-learn-data-sources>
      </b-modal>       
    </div>
  </div>
</template>

<script>
import { imageLibraryWaterQuality} from '../../lib/constants'
import LearnDataSources from './LearnDataSources.vue'
export default {
  data () {
    return {
        imageLibraryWaterQuality: imageLibraryWaterQuality
    }
  },
  components: {
    appLearnDataSources: LearnDataSources
  }
}
</script>

<style scoped>
.reference {
  width: 1000px;
}

</style>
