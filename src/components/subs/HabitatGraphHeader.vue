<!-- 
 HabitatGraphHeader.vue
 This file serves as the header for the habitat graph in the right-hand side bar. It updates on 
 selection of embayment. It includes a banner with the name of the selected habitat, an image of 
 the habitat, and a smaller banner with [habitat name] Extent followed by the selected embayment. 
 If no embayment is selected, All Assessment Areas is the default.

 Last updated: 11/12/2024
 -->

 <template>
  <div>
    <div class="row" :class="habitatKebab + '-background'">
      <div class="col-12" style="text-align: center; color: #ffffff;">
        <h2 style="margin-top: 0.4px; margin-bottom: 4px">
          <b>{{ habitatCapital }}</b>
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div v-for="(item, key) in imageLibrary" :key="key">
          <div v-if="habitat==key" style="width: 100%">
            <div class="center-cropped"
              :style="{ 'background-image': 'url(' + item.img + ')' }"
              :alt="'background image for ' + key">
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-12" style="text-align: center">
        <h6>{{habitatCapital}} Extent</h6>
        <h6 v-if="embayment != null">{{embaymentCapital}}</h6>
        <h6 v-else>All Assessment Areas</h6>
      </div>
    </div>
  </div>
 </template>
 
 <script>
 import { imageLibraryHabitat } from '../../lib/constants'
 export default {
   data () {
     return {
         imageLibrary: imageLibraryHabitat
     }
   },
   computed: {
     habitatGraphVariable() {
       return this.$store.state.habitatGraphVariable;
     },
     habitat() {
       return this.$store.state.habitat;
     },
     habitatKebab() {
       return this.$store.state.habitat.replace(' ', '-');
     },
     habitatCapital() {
       const titles = this.$store.state.habitat.split(" ");
       const capitalTitle = titles.map((word) => {
         return word[0].toUpperCase() + word.substring(1);
       }).join(" ");
       console.log(capitalTitle)
       return capitalTitle;
     },
     embayment() {
       return this.$store.state.embayment;
     },
     embaymentCapital() {
       let nameStringArray = this.$store.state.embayment.split(" ");
       nameStringArray.forEach((word, index) => {
         if (word[0] == '(') {
           nameStringArray[index] = word.substring(0, 2) + word.slice(2).toLowerCase();
         } else {
           nameStringArray[index] = word[0] + word.slice(1).toLowerCase();
         }
       });
       return nameStringArray.join(' ');    
     }
   }
 }
 </script>
 
 <style scoped>
 .overlay-text {
   position: absolute;
   top: 25%;
   left: 10%;
   color: white;
 }
 .center-cropped {
   width: 100%;
   height: 90px;
   background-position: center center;
   background-repeat: no-repeat;
   background-size: cover;
 }
 .narrow-button {
   height: 30px;
   padding-top: 0px;
   padding-bottom: 2px;
   margin: 2px;
 }
 </style>
 