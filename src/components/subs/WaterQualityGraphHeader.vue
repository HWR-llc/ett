<template>
  <div style="width: 100%; min-height: 100px">
    <div class="top-row">
      <h5>Embayment Name</h5>
    </div>
    <div class="bottom-row">
      <div v-for="(item, key) in imageLibrary" :key="key">
        <div v-if="key == waterQualityGraphVariable">
          <img :src="item.pic" style="max-height: 60px" class="overlay-icon">
        </div>
      </div>
      <h6>{{ station }}<br>
      {{ waterQualityGraphVariableCapital }}</h6>
    </div>  
  </div>
</template>

<script>
import { imageLibraryWaterQuality } from '../../lib/constants'
export default {
  data () {
    return {
        imageLibrary: imageLibraryWaterQuality
    }
  },
  computed: {
    waterQualityGraphVariable() {
      return this.$store.state.waterQualityGraphVariable;
    },
    station() {
      return this.$store.state.station;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    waterQualityGraphVariableCapital() {
      const titles = this.$store.state.waterQualityGraphVariable.split(" ");
      let capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      if ((capitalTitle == 'Nitrogen') || (capitalTitle == 'Phosphorus')) {
        capitalTitle = 'Total ' + capitalTitle;
      }
      return capitalTitle;
    },
  }
}
</script>

<style scoped>
.top-row {
  text-align: center;
  color: white;
  background-color: #1850AD;
  height: 25px;
  width: 100%;
}

.bottom-row {
  padding-top: 15px;
  text-align: center;
  height: 75px;
}

.overlay-icon {
  position: absolute;
  top: 60px;
  left: 5%;
}
</style>
