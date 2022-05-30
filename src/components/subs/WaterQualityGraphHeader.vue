<template>
  <div id="holder">
    <div class="row top-row">
      <div class="col-12">
        <h5> {{ stationEmbaymentCapital }}</h5>
      </div>      
    </div>
    <div class="row bottom-row">
      <div class="col-3 my-auto">
        <img :src="imageLibrary[waterQualityGraphVariable].pic" style="max-height: 60px">
      </div>
      <div class="col-9 my-auto">
      <h6>{{ station }}<br>{{imageLibrary[waterQualityGraphVariable].title }}</h6>        
      </div>      
    </div>
  <!-- <div class="row"style="width: 100%; min-height: 100px">
    <div class="top-row">
      <h5>Embayment Name</h5>
    </div>
    <div class="row">
      <div class="col-3">
        <img :src="imageLibrary[waterQualityGraphVariable].pic" style="max-height: 60px" class="overlay-icon">
      </div>
      <div class="col-p">
      <h6>{{ station }}<br>{{ waterQualityGraphVariableCapital }}</h6>        
      </div>
    </div> -->
    <!-- <div class="bottom-row">
      <div v-for="(item, key) in imageLibrary" :key="key">
        <div v-if="key == waterQualityGraphVariable">
          <img :src="item.pic" style="max-height: 60px" class="overlay-icon">
        </div>
      </div>
      <h6>{{ station }}<br>
      {{ waterQualityGraphVariableCapital }}</h6>
    </div>   -->
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
    stationEmbaymentCapital() {
      let nameStringArray = this.$store.state.stationEmbayment.split(" ");
      nameStringArray.forEach((word, index) => {
        if (word[0] == '(') {
          nameStringArray[index] = word.substring(0, 2) + word.slice(2).toLowerCase();
        } else {
          nameStringArray[index] = word[0] + word.slice(1).toLowerCase();
        }
      });
      return nameStringArray.join(' ');    
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
  margin: 0px;
}

.bottom-row {
  padding-top: 5px;
  margin: 0px;
  height: 75px;
}

.overlay-icon {
  position: absolute;
  top: 60px;
  left: 5%;
}
</style>
