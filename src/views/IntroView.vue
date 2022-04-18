<template>
  <div class="container-fluid" >
    <div class="row" id="top-row">
      <div class="col-12">
        <div class="row justify-content-center">
          <img src="../assets/imgs/landing_page.jpg" style="width: 35%">
        </div>
        <br>
        <div class="row justify-content-center text-center">
          <h5>Explore Coastal Habitats and Water Quality <br> in the Massachusetts Bays Region</h5>
        </div>
        <div class="row justify-content-center">
          <b-button class="habitat-background no-border" @click="()=>$router.push('explorer')"><b>Start Exploring</b></b-button>
        </div>
        <div class="row justify-content-center"  style="padding-top: 10px">
          <p style="max-width: 60%; text-align: center">
            The <b>Ecohealth Tracking Tool</b> is a gateway for citizens, scientists, and policy makers to learn about coastal habitats, the water quality that sustains healthy habitats, and the many benefits these habitats provide. Explore habitat and water quality data for the entire MassBays region…or take a closer look at data for your favorite beach, salt marsh, or estuary. 
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" id="bottom-row">
      <img src="../assets/logos/mass_bays_rect.svg" style="max-width: 15%">
    </div>

  </div>
</template>

<script>

</script>

<style scoped>
#top-row {
  border-top: solid 10px #00A3CC;
  border-bottom: solid 10px #00A3CC;
  background-color: #0F326B;
  color: #FFFFFF;
  padding-top: 25px;
  align: center;
}
#bottom-row {
  padding-top: 25px;
}
</style>
