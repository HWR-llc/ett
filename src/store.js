import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    view: 'water quality',
    habitat: 'salt marsh',
    waterQuality: 'all',
    habitatIndex: null,
    baseLayer: true,
    pointsLayer: false,
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
    },
    SWITCH_BASE_LAYER: state => {
      state.baseLayer = !state.baseLayer;
    },
    SWITCH_POINTS_LAYER: state => {
      state.pointsLayer = !state.pointsLayer;
    },
    SWITCH_HABITAT_METRIC_LAYER: state => {
      state.habitatMetricLayer = !state.habitatMetricLayer;
    },
    SWITCH_HABITAT_INDEX_LAYER: state => {
      state.habitatIndexLayer = !state.habitatIndexLayer;
    }
  },
  actions: {
    activateHabitat: ({commit, state}) => {
      if (state.view == 'water quality') {
        commit('VIEW_HABITAT');
      }
    },
    activateWaterQuality: ({commit, state}) => {
      if (state.view == 'habitat') {
        commit('VIEW_WATER_QUALITY');
      }
    }, 
    switchHabitat: ({commit}, payload) => {
      commit('SET_HABITAT', payload);
    },
    switchWaterQuality: ({commit}, payload) => {
      commit('SET_WATER_QUALITY', payload);
    },
    switchBaseLayer: ({commit}) => {
      commit('SWITCH_BASE_LAYER');
    },
    switchPointsLayer: ({commit}) => {
      commit('SWITCH_POINTS_LAYER');
    },
    switchHabitatMetricLayer: ({commit, state}) => {
      commit('SWITCH_HABITAT_METRIC_LAYER');
      if (state.habitatIndexLayer == true && state.habitatMetricLayer == true) {
        commit('SWITCH_HABITAT_INDEX_LAYER');
      }
    },
    switchHabitatIndexLayer: ({commit, state}) => {
      commit('SWITCH_HABITAT_INDEX_LAYER');
      if (state.habitatIndexLayer == true && state.habitatMetricLayer == true) {
        commit('SWITCH_HABITAT_METRIC_LAYER');
      }
    }
  }
});