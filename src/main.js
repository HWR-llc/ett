import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ToggleButton from 'vue-js-toggle-button'

import { store } from './store'

import App from './App.vue'

import './assets/styles.css'

import "leaflet/dist/leaflet.css";

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ToggleButton)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
