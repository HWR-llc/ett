<template>
 <div>
   <div class="row">
    <div class="col-12">
      <div v-for="(item, key) in imageLibrary" :key="key">
        <div v-if="graphVariable==key" :style="parentWidthStyle">
          <div class="center-cropped"
               :style="{ 'background-image': 'url(' + item.img + ')' }">
          </div>
          <h3 class="overlay-text">{{ item.title }}</h3>
          <img :src="item.pic" style="max-height: 90%" class="overlay-icon">
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
        imageLibrary: imageLibraryHabitat,
        parentWidthStyle: null
    }
  },
  computed: {
    graphVariable() {
      return this.$store.state.graphVariable;
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
    }
  },
  mounted() {
    this.parentWidthStyle = 'width: ' + this.$el.parentElement.clientWidth + 'px';
  }
}
</script>

<style scoped>
.overlay-text {
  position: absolute;
  top: 35%;
  left: 10%;
  color: white;
}
.overlay-icon {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
}

.center-cropped {
  width: 100%;
  height: 90px;
  background-position: center center;
  background-repeat: no-repeat
}
</style>
