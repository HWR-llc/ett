<template>
  
  <div class="container-fluid" >
    <app-header-container></app-header-container>
    <div class="row">
      <div class="col-2">
        <app-margin-left></app-margin-left>
      </div>
      <div class="col-7">
        Map
      </div> 
      <div class="col-3">
        Margin Right
        <p> {{ view }} </p>
      </div>      
    </div>
  </div>
</template>

<script>
import HeaderContainer from './components/HeaderContainer.vue'
import MarginLeft from './components/MarginLeft.vue'
export default {
  name: 'App',
  computed: {
    view() {
      return this.$store.state.view;
    }
  },
  components: {
    appHeaderContainer: HeaderContainer,
    appMarginLeft: MarginLeft
  }
}
</script>

<style>

</style>

