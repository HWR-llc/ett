<template>
 <div>
    <div class="row">
      <div class="col-12">
        <div v-for="(item, key) in imageLibrary" :key="key">
          <div v-if="habitat==key"   style="width: 100%">
            <div class="center-cropped"
               :style="{ 'background-image': 'url(' + item.img + ')' }"
               :alt="'background image for ' + key">
            </div>
            <h2 class="overlay-text"><b>{{ item.title }}</b></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="padding-top: 5px">
      <div class="col-12" style="text-align: center">
        <h4> {{ habitatCapital}} Extent</h4>       
      </div>
    </div>
    <div class="row">
      <div class="col-12" style="text-align: center; padding-left: 20px">
        <div v-if="embayment == null">
          <h5>All Assessment Areas</h5>
        </div>
        <div v-else>
          <h5 class="d-inline" style="padding-right: 10px">{{ embaymentCapital }}</h5>
          <b-button variant="success" class="d-inline" size="sm" title="return to all MassBays assessment areas" @click="allEmbayments">
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
    habitatCapital() {
      const titles = this.$store.state.habitat.split(" ");
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
