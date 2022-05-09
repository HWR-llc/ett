<template>
  <div>
    <div class="row justify-content-center habitat-main">
      <h2>Habitats</h2>
    </div>
    <div class="row justify-content-center">
        <div v-for="(item, key) in imageLibraryHabitat" :key="key">
          <img :src="item.pic" style="max-height: 120px; margin: 10px">
        </div>
    </div>
    <!-- EELGRASS -->
    <div v-for="(item, key) in imageLibraryHabitat" :key="key">
      <div class="row">
        <div class="col-12">
          <h3 :class="item.mainClass">{{ item.title }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="clearfix">
            <img :src="item.learnImg" class="col-5 float-right" alt="...">
            <p v-html="item.explanation"></p>
          </div>
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
        imageLibraryHabitat: imageLibraryHabitat
    }
  }
}
</script>

<style scoped>

</style>
