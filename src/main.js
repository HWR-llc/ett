import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { store } from './store'
import router from './router'

import ToggleButton from 'vue-js-toggle-button'
import "leaflet/dist/leaflet.css";
import HighchartsVue from "highcharts-vue"

import App from './App.vue'
import './assets/styles.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ToggleButton)
Vue.use(HighchartsVue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
