<template>
 <div>
    <div class="row" :class="habitatKebab + '-background'">
      <div class="col-12" style="text-align: center; color: #ffffff;">
        <h2 style="margin-top: 0.4px; margin-bottom: 4px"><b>{{ habitatCapital }}</b></h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div v-for="(item, key) in imageLibrary" :key="key">
          <div v-if="habitat==key"   style="width: 100%">
            <!-- <img :src="item.img" :alt="'background image for ' + key"> -->
            <div class="center-cropped"
               :style="{ 'background-image': 'url(' + item.img + ')' }"
               :alt="'background image for ' + key">
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row" style="padding-top: 5px">
      <div class="col-12" style="text-align: center">
        <h6> {{ habitatCapital}} Extent</h6>       
      </div>
    </div>
    <div class="row" v-if="this.$store.state.habitat != 'diadromous fish'">
      <div class="col-12" style="text-align: center; padding-left: 20px">
        <div v-if="embayment == null">
          <h6>All Assessment Areas</h6>
        </div>
        <div v-else>
          <h6 class="d-inline" style="padding-right: 10px">{{ embaymentCapital }}</h6>
          <b-button variant="success" class="d-inline" size="sm" title="return to all MassBays assessment areas" @click="allEmbayments">
            <b-icon icon="globe" aria-hidden="true"></b-icon>
          </b-button>
        </div>
      </div>
      </div>
      <div class="row" v-else> 
      <div class="col-12" style="text-align: center; padding-left: 20px">
        <div v-if="fishRun == null">
          <h6>All Assessment Areas</h6>
        </div>
        <div v-else>
          <h6 class="d-inline" style="padding-right: 10px">{{ fishRunCapital }}</h6>
          <b-button variant="success" class="d-inline" size="sm" title="return to all MassBays assessment areas" @click="allFishRun">
            <b-icon icon="globe" aria-hidden="true"></b-icon>
          </b-button>
        </div>
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
    habitatKebab() {
      return this.$store.state.habitat.replace(' ', '-');
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
    fishRunCapital() {
      const titles = this.$store.state.fishRun.split(" ");
      const capitalTitle = titles.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(" ");
      return capitalTitle;
    },
    embayment() {
      return this.$store.state.embayment;
    },
    embaymentCapital() {
      let nameStringArray = this.$store.state.embayment.split(" ");
      nameStringArray.forEach((word, index) => {
        if (word[0] == '(') {
          nameStringArray[index] = word.substring(0, 2) + word.slice(2).toLowerCase();
        } else {
          nameStringArray[index] = word[0] + word.slice(1).toLowerCase();
        }
      });
      return nameStringArray.join(' ');    
    }
  },
  methods: {
    allEmbayments() {
      this.$store.dispatch('setEmbayment', null);
    },
    allFishRun() {
      this.$store.dispatch('setFishRun', null);
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
  background-repeat: no-repeat;
  background-size: cover;
}
.narrow-button {
  height: 30px;
  padding-top: 0px;
  padding-bottom: 2px;
  margin: 2px;
}
</style>
