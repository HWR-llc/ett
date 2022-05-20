<template>
  <div>
    <!-- Metric Toggle -->
    <div class="row">
      <div class="col-3" style="padding-top: 5px">
        <toggle-button v-model="metricLayer" :sync="true"></toggle-button>
      </div>
      <div class="col-9">
        <div class="row">
          % of 2050 {{ habitatCapital }} Goal
        </div>
        <div class="row" style="padding-top: 5px">
          <div class="col-12">
            <svg height="60">
              <rect id="patch" x="5" y="0" width="35" height="25" :style="{fill: colorScale(0)}"/>
              <rect id="patch" x="40" y="0" width="35" height="25" :style="{fill: colorScale(0.2)}"/>
              <rect id="patch" x="75" y="0" width="35" height="25" :style="{fill: colorScale(0.4)}"/>
              <rect id="patch" x="110" y="0" width="35" height="25" :style="{fill: colorScale(0.6)}"/>
              <rect id="patch" x="145" y="0" width="35" height="25" :style="{fill: colorScale(0.8)}"/>
              <rect id="patch" x="180" y="0" width="35" height="25" :style="{fill: colorScale(1)}"/>
              <text x="0" y="40" class="small">0</text>
              <text x="35" y="40" class="small">20</text>
              <text x="70" y="40" class="small">40</text>
              <text x="105" y="40" class="small">60</text>
              <text x="140" y="40" class="small">80</text>
              <text x="170" y="40" class="small">100+</text>
            </svg>
          </div>
        </div>     
      </div>         
    </div>
  </div>
</template>

<script>
import { interpolateGreens, interpolateOranges, interpolatePurples, interpolateBlues } from 'd3-scale-chromatic'
// import { schemeBlues } from 'd3-scale-chromatic'
// import { scaleOrdinal} from 'd3-scale'
export default {
  computed: {
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
    metricLayer: {
      get () {
        return this.$store.state.metricLayer;
      },
      set () {
        this.$store.dispatch('switchMetricLayer');
      }      
    },
    habitatIndexLayer: {
      get () {
        return this.$store.state.habitatIndexLayer;
      },
      set () {
        this.$store.dispatch('switchHabitatIndexLayer');
      }      
    }
  },
  methods: {
    colorScale(value) {
      if (this.habitat == 'tidal flats') {
        return interpolatePurples(value);
      } else if (this.habitat == 'salt marsh') {
        return interpolateOranges(value);
      } else if (this.habitat == 'eelgrass') {
        return interpolateGreens(value)
      } else if (this.habitat == 'diadromous fish') {
        return interpolateBlues(value);
      } else {
        return '#ffffff';
      }
    }
  }
}
</script>

<style>

</style>
