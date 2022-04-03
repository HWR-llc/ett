<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="row" style="padding-top: 20px; padding-left: 50px; padding-right: 50px">
          <i>Click on a watershed to zoom and center map or select from the list below <br><u>not active yet</u></i>
        </div>
        <br>
        <br>
        <div class="row">
          <div class="col-12" style="text-align: center">
            <b-form-select v-model="embayment" :options="embaymentList">select a watershed</b-form-select>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
      <div id="outer">
        <div class="inner">
          <b-button squared class="salt-marsh-background" href="https://www.google.com/" target="_blank">About</b-button>
          <b-button squared class="tidal-flats-background" href="https://www.google.com/" target="_blank">MassBays<br>Region</b-button>
        </div>
      </div>
      <div id="outer">
        <div class="inner">
            <b-button squared class="eelgrass-background" href="https://www.google.com/" target="_blank">References</b-button>
            <b-button squared class="diadromous-background" href="https://www.google.com/" target="_blank">Metadata</b-button>         
        </div>
      </div>      

    </div>
    <div class="row">
      <img src="../assets/logos/mass_bays_rect.png" style="max-width: 100%">

    </div>    



  </div>
</template>

<script>


export default {
  data () {
    return { 
      embaymentList: [
        {value: null, text: 'select a watershed'},
        {value: 'embayment 1', text: 'embayment 1'},  
        {value: 'embayment 2', text: 'embayment 2'},  
        {value: 'embayment 3', text: 'embayment 3'},  
        {value: 'embayment 4', text: 'embayment 4'},  
        {value: 'embayment 5', text: 'embayment 5'},  
        {value: 'embayment 6', text: 'embayment 6'},        
      ]
    }
  },
  computed: {
    habitat() {
      return this.$store.state.habitat;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    embayment: {
      get () {
        return this.$store.state.embayment;
      },
      set (newEmb) {
        this.$store.dispatch('setEmbayment', newEmb);
      }      
    },
  }
}
</script>

<style scoped>
.btn {
  font-size: 12px;
  border: 0px;
  margin: 1px;
  height: 40px;
  width: 45%;
}

#outer {
  width:100%;
  text-align: center;
}
.inner {
  width: 100%;
  display: inline-block;
}
</style>
