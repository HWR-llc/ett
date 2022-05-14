<template>
 <div>
    <div class="row">
      <div class="col-12">
        <div v-for="(item, key) in imageLibrary" :key="key">
          <div v-if="habitat==key"   style="width: 100%">
            <div class="center-cropped"
               :style="{ 'background-image': 'url(' + item.img + ')' }">
            </div>
            <h2 class="overlay-text"><b>{{ item.title }}</b></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="padding-top: 5px">
      <div class="col-7" style="text-align: left; padding-left: 20px">
        <h4> {{ habitatCapital}} Extent</h4>       
      </div>
      <div class="col-5">
        <b-button variant="secondary" class="narrow-button" @click="nullEmbayment">
          Region Data
        </b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12" style="text-align: center; padding-left: 20px">
        <h5 v-if="embayment == null">MassBays Region</h5><h5 v-else>{{ embayment }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { imageLibraryHabitat } from '../../lib/constants'
export default {
  data () {
    return {
        imageLibrary: imageLibraryHabitat
    }
  },
  computed: {
    habitatGraphVariable() {
      return this.$store.state.habitatGraphVariable;
    },
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
    embayment() {
      return this.$store.state.embayment;
    }
  },
  methods: {
    nullEmbayment() {
      this.$store.dispatch('setEmbayment', null);
    }
  }
}
</script>

<style scoped>
.overlay-text {
  position: absolute;
  top: 25%;
  left: 10%;
  color: white;
}
.center-cropped {
  width: 100%;
  height: 90px;
  background-position: center center;
  background-repeat: no-repeat
}
.narrow-button {
  height: 30px;

  padding-top: 0px;
  padding-bottom: 2px;
  margin: 2px;
}
</style>
