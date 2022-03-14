<template>
  <div>
    <div class="text-box" v-if="habitat=='eelgrass'">
      EELGRASS<br>
      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.
      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.

    </div>
    <div class="text-box" v-if="habitat=='salt marsh'">
      SALT MARSH<br>
      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.
      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.
    </div>
    <div class="text-box" v-if="habitat=='tidal flats'">
      TIDAL FLATS<br>
      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.
      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.
    </div>
    <div class="text-box" v-if="habitat=='diadromous'">
      DIADROMOUS<br>
      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.
      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.      Lorem ipsum dolor sit amet,sectetur adipiscing eli, sed do eismod tempor indicit ut labore el dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Te vis fastidii suavitate gloriatur. Mel tation delenit at. Ei mea tale periculis. Nec omittam appetere te, ne latine.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    habitat() {
      return this.$store.state.habitat;
    }
  },

}
</script>

<style>
.text-box {
  padding: 10px;
  /* Do not like custom font-size */
  font-size: 12px;
  height: 240px;
  overflow-y: scroll;
  text-align: justify;


}

</style>
