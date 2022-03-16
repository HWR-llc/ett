<template>
  <div>
    <div class="row">
      <div class="col-3" style="padding-top: 5px">
        <toggle-button @change="flipHabitat" v-model="habitatOnOff" color="#76DF41" :sync="true"></toggle-button>
      </div>
      <div class="col-9">
        <div class="row">
          prop {{ habitatCapital }} Extent
        </div>
        <div class="row">
          <div class="col-2">
            <svg height="30">
              <rect id="patch" x="0" y="0" width="35" height="25" :class="svgClass"/>
            </svg>
          </div>
          <div class="col-10">
            {{ currentHabitatYear }} {{ habitat }} ({{ habitatSource }})
          </div>
        </div>     
      </div>         
    </div>
  </div>
</template>

<script>
import { imageLibraryHabitat } from './../../lib/constants'
export default {
  data () {
    return {
        habitatYears: imageLibraryHabitat
    }
  },
  computed: {
    currentHabitatYear() {
      return this.habitatYears[this.habitat].currentYear
    },
    historicHabitatYear() {
      return this.habitatYears[this.habitat].historicYear
    },
    habitatSource() {
      return this.habitatYears[this.habitat].source
    },
    svgClass() {
      const habString = this.$store.state.habitat.split(" ").join("-") + '-base-current';
      return habString
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
    view() {
      return this.$store.state.view;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    }
  }
}
</script>

<style>

</style>
