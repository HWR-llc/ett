<template>
  <div class="legend-border">

    <div class="row">
      <div class="col-3">
        <svg height="20" width="30">
          <rect id="legend 1" x="0" y="0" width="30" height="20" style="fill: #000000; fill-opacity: 0; stroke: #000000"/>
        </svg> 
      </div>
      <div class="col-9">
        watershed embayment
      </div>
    </div>

    <div class="row" v-if="habitat == 'salt marsh'">
      <div class="col-3">
        <svg height="20" width="30">
          <rect id="legend 2" x="0" y="0" width="30" height="20" style="fill: #255c33"/>
        </svg> 
      </div>
      <div class="col-9">
        salt marsh
      </div>
    </div>

    <div class="row"  v-if="habitat == 'eelgrass'">
      <div class="col-3">
        <svg height="20" width="30">
          <rect id="legend 3" x="0" y="0" width="30" height="20" style="fill: #e319a6"/>
        </svg> 
      </div>
      <div class="col-9">
        eelgrass
      </div>
    </div>

    <div class="row" v-if="habitat == 'tidal flats'">
      <div class="col-3">
        <svg height="20" width="30">
          <rect id="legend 4" x="0" y="0" width="30" height="20" style="fill: #c96b12"/>
        </svg> 
      </div>
      <div class="col-9">
        tidal flats
      </div>
    </div>

    <div class="row" v-if="habitat == 'diadromous fish'">
      <div class="col-3">
        <svg height="20" width="30">
          <line id="legend 5" x1="0" y1="10" x2="30" y2="10" style="stroke: #000000"/>
        </svg> 
      </div>
      <div class="col-9">
        fish passage
      </div>
    </div>

    <div class="row" v-if="pointsLayer == true">
      <div class="col-3">
        <svg height="20" width="30">
          <circle id="legend 6" cx="15" cy="10" r="5" style="fill: #00B0F0"/>
        </svg> 
      </div>
      <div class="col-9">
        WQ data for parameter
      </div>
    </div>

    <div class="row" v-if="pointsLayer == true">
      <div class="col-3">
        <svg height="20" width="30">
          <circle id="legend 6" cx="15" cy="10" r="5" style="fill: #808080"/>
        </svg> 
      </div>
      <div class="col-9">
        no WQ data for parameter
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    pointsLayer() {
      return this.$store.state.pointsLayer;
    }
  }

}
</script>

<style scoped>
.legend-border {
  border: solid 1px gray;
  background-color: rgba(255,255,255,.7);
  border-radius: 15px;
  padding: 15px;
}

</style>
