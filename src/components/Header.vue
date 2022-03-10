<template>
  <div>
    <div class="row" id="topRow">
      <div class="col-xs-3" id="logoBox">
        <!-- Problem here making image fit -->
        <img src="../assets/logos/ett_square_no_border.png" style="background-color: white; height: auto; margin: auto; display: block">
      </div>
      <div class="col-xs-4">
        Middle Block
      </div>
      <div class="col-xs-5">
        Right Block
      </div>
    </div>
    <div class="row" id="bottomRow">
      <div class="col-xs-3">
      </div>
      <div class="col-xs-4">
        Click on a <b>habitat type</b> to see maps and data.
      </div>
      <div class="col-xs-5">
        Right Block
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#topRow {
  height: 30%;
  max-height: 150px;
  background-color: black;
  padding: 0px;
}

#bottomRow {
  height: 30px;
  background-color: lightgreen;
}
#logoBox {
  background-color: white;
}

</style>
