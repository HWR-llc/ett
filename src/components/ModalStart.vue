<template>
  <div>
    <b-modal v-model="modalShow" centered hide-header="true" hide-footer="true">
      <div class="row justify-content-center">
        <h4>Welcome to the ETT</h4>
      </div>
      <div class="row justify-content-center">
          To get started, select a habitat type or water quality.
      </div>
      <br>
      <div class="row justify-content-center">
        <div v-for="(item, key) in imageLibraryHabitat" :key="key" @click="iconClicked(key)">
          <figure>
            <img :src="item.pic" class="icon-buttons">
            <figcaption style="text-align: center">{{item.title}}</figcaption>
          </figure>
        </div>
      </div>
      <br>
      <div class="row justify-content-center">
        <b-button variant="primary" class="water-quality-background no-border" @click="buttonClicked">Water Quality</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { imageLibraryHabitat } from '../lib/constants'
import { stateWideHabitatValues } from '../lib/constants'
export default {
  data () {
    return {
      modalShow: true,
      imageLibraryHabitat: imageLibraryHabitat,
      stateWideHabitatValues: stateWideHabitatValues
    }
  },
  methods: {
    iconClicked(newHab) {
      if (newHab == 'diadromous fish') {
        alert('Diadromous fish habitat coming soon');
      } else {
        this.$store.dispatch('setHabitatGraphData', this.stateWideHabitatValues);
        this.$store.dispatch('setHabitat', newHab);
        this.$store.dispatch('onBaseLayer');
        this.$store.dispatch('offQuickStart');
        this.modalShow = false;
      }
    },
    buttonClicked() {
      this.$store.dispatch('onPointsLayer');
      this.modalShow = false;
    }
  }
}
</script>

<style scoped>
.icon-buttons {
  height: 90px; 
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
}

</style>