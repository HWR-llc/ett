<template>
  
  <div class="container-fluid" >
    <app-header-container></app-header-container>
    <div class="row">
      <div class="col-2">
        <app-margin-left></app-margin-left>
      </div>
      <div class="col-7">
        Map
        <p> {{ view }} - {{waterQuality}} </p>
      </div> 
      <div class="col-3">
        <app-margin-right></app-margin-right>
      </div>      
    </div>
  </div>
</template>

<script>
import HeaderContainer from './components/HeaderContainer.vue'
import MarginLeft from './components/MarginLeft.vue'
import MarginRight from './components/MarginRight.vue'
export default {
  name: 'App',
  computed: {
    view() {
      return this.$store.state.view;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    habitat() {
      return this.$store.state.habitat;
    }
  },
  components: {
    appHeaderContainer: HeaderContainer,
    appMarginLeft: MarginLeft,
    appMarginRight: MarginRight    
  }
}
</script>

<style>

</style>

