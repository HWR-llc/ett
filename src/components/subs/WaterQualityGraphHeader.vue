<template>
  <div style="width: 100%">
    <div class="top-row">
      <h5>Embayment Name</h5>
    </div>
    <div class="bottom-row">
      <div v-for="(item, key) in imageLibrary" :key="key">
        <div v-if="key == waterQualityGraphVariable">
          <img :src="item.pic" style="max-height: 60px" class="overlay-icon">
        </div>
      </div>
      <h6> station: WQ-{{ station }}</h6>
      <h6>{{ waterQuality }}, 19XX-20XX</h6>
    </div>
    

        


 
    <!-- <div class="row justify-content-center bottom-row">
      <div class="col-4">
        <div v-for="(item, key) in imageLibrary" :key="key">
          <img :src="item.pic" style="max-height: 60px" class="overlay-icon">
        </div>
      </div>
      <div class="col-8">
        
      </div>
    </div> -->
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
    habitatCapital() {
      const titles = this.$store.state.habitat.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    }
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
  padding-top: 10px;
  text-align: center;
  height: 65px;
}

.overlay-icon {
  position: absolute;
  top: 26px;
  left: 5%;
}
</style>
