import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    view: 'habitat',
    habitat: 'salt marsh',
    waterQuality: 'all',
    habitatIndex: null,
    curBaseLayer: true,
    hisBaseLayer: true,
    habitatMetricLayer: false,
    habitatIndexLayer: false,
    embayment: null,
    station: null
  }
});