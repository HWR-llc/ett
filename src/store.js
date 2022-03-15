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
  },
  mutations: {
    VIEW_HABITAT: state => {
      state.view = 'habitat';
    },
    VIEW_WATER_QUALITY: state => {
      state.view = 'water quality';
    },
    SET_HABITAT: (state, payload) => {
      state.habitat = payload;
    },
    SET_WATER_QUALITY: (state, payload) => {
      state.waterQuality = payload;
    }
  },
  actions: {
    switchView: ({commit, state}) => {
      if (state.view == 'habitat') {
        commit('VIEW_WATER_QUALITY');
      } else {
        commit('VIEW_HABITAT');
      }
    },
    switchHabitat: ({commit}, payload) => {
      commit('SET_HABITAT', payload);
    },
    switchWaterQuality: ({commit}, payload) => {
      commit('SET_WATER_QUALITY', payload);
    }
  }
});