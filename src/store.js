import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    habitat: null,
    waterQuality: null,
    habitatGraphVariable: null,
    waterQualityGraphVariable: null,
    habitatIndex: null,
    baseLayer: false,
    pointsLayer: false,
    metricLayer: false,
    habitatIndexLayer: false,
    waterQualityGraph: false,
    embayment: null,
    station: null,
    stationEmbayment: null,
    habitatGraphData: null,
    showQuickStart: true,
    showLargeGraph: false,
    plotHabitatGraph: false,
    plotWaterQualityGraph: false,
    legendYears: {
      'eelgrass': {historic: null, current: null},
      'salt marsh': {historic: null, current: null},
      'tidal flats': {historic: null, current: null},
      'diadromous fish': {historic: null, current: null}
    }
  },
  mutations: {
    SET_HABITAT: (state, payload) => {
      state.habitat = payload;
    },
    SET_WATER_QUALITY: (state, payload) => {
      state.waterQuality = payload;
    },
    SET_HABITAT_GRAPH_VARIABLE: (state, payload) => {
      state.habitatGraphVariable = payload;
    },
    SET_WATER_QUALITY_GRAPH_VARIABLE: (state, payload) => {
      state.waterQualityGraphVariable = payload;
    },    
    SET_STATION: (state, payload) => {
      state.station = payload;
    },
    SET_STATION_EMBAYMENT: (state, payload) => {
      state.stationEmbayment = payload;
    },
    SET_EMBAYMENT: (state, payload) => {
      state.embayment = payload;
    },   
    SET_HABITAT_GRAPH_DATA: (state, payload) => {
      state.habitatGraphData = payload;
    },
    SWITCH_BASE_LAYER: state => {
      state.baseLayer = !state.baseLayer;
    },
    SWITCH_POINTS_LAYER: state => {
      state.pointsLayer = !state.pointsLayer;
    },
    ON_WATER_QUALITY_GRAPH: state => {
      state.waterQualityGraph = true;
    },
    OFF_WATER_QUALITY_GRAPH: state => {
      state.waterQualityGraph = false;
    },
    ON_POINTS_LAYER: state => {
      state.pointsLayer = true;
    },
    ON_BASE_LAYER: state => {
      state.baseLayer = true;
    },
    SWITCH_METRIC_LAYER: state => {
      state.metricLayer = !state.metricLayer;
    },
    SWITCH_HABITAT_INDEX_LAYER: state => {
      state.habitatIndexLayer = !state.habitatIndexLayer;
    },
    ON_QUICK_START: state => {
      state.showQuickStart = true;
    },
    OFF_QUICK_START: state => {
      state.showQuickStart = false;
    },
    SWITCH_SHOW_LARGE_GRAPH: state => {
      state.showLargeGraph = !state.showLargeGraph;
    },
    ON_PLOT_HABITAT_GRAPH: state => {
      state.plotHabitatGraph = true;
    },
    OFF_PLOT_HABITAT_GRAPH: state => {
      state.plotHabitatGraph = false;
    },
    ON_PLOT_WATER_QUALITY_GRAPH: state => {
      state.plotWaterQualityGraph = true;
    },
    OFF_PLOT_WATER_QUALITY_GRAPH: state => {
      state.plotWaterQualityGraph = false;
    },
    SET_HABITAT_LEGEND_YEAR: (state, payload) => {
      state.legendYears[payload.habitat][payload.period] = payload.value;
    },
  },
  actions: {
    setHabitat: ({commit}, payload) => {
      commit('SET_HABITAT', payload);
    },
    setWaterQuality: ({commit}, payload) => {
      commit('SET_WATER_QUALITY', payload);
    },
    setHabitatGraphVariable: ({commit}, payload) => {
      commit('SET_HABITAT_GRAPH_VARIABLE', payload);
    },
    setWaterQualityGraphVariable: ({commit}, payload) => {
      commit('SET_WATER_QUALITY_GRAPH_VARIABLE', payload);
    },
    setStation: ({commit}, payload) => {
      commit('SET_STATION', payload);
    },
    setStationEmbayment: ({commit}, payload) => {
      commit('SET_STATION_EMBAYMENT', payload);
    },
    setEmbayment: ({commit}, payload) => {
      commit('SET_EMBAYMENT', payload);
    },
    setHabitatGraphData: ({commit}, payload) => {
      commit('SET_HABITAT_GRAPH_DATA', payload);
    },    
    switchBaseLayer: ({commit}) => {
      commit('SWITCH_BASE_LAYER');
    },
    switchPointsLayer: ({commit}) => {
      commit('SWITCH_POINTS_LAYER');
    },
    onPointsLayer: ({commit, state}) => {
      if (state.pointsLayer == false) {
        commit('ON_POINTS_LAYER');
      }
    },
    onBaseLayer: ({commit, state}) => {
      if (state.baseLayer == false) {
        commit('ON_BASE_LAYER');
      }
    },
    onWaterQualityGraph: ({commit}) => {
      commit('ON_WATER_QUALITY_GRAPH');
    },
    offWaterQualityGraph: ({commit}) => {
      commit('OFF_WATER_QUALITY_GRAPH');
    },
    switchMetricLayer: ({commit}) => {
      commit('SWITCH_METRIC_LAYER');
    },
    switchHabitatIndexLayer: ({commit, state}) => {
      commit('SWITCH_HABITAT_INDEX_LAYER');
      if (state.habitatIndexLayer == true && state.habitatMetricLayer == true) {
        commit('SWITCH_HABITAT_METRIC_LAYER');
      }
    },
    onQuickStart: ({commit}) => {
      commit('ON_QUICK_START');
    },
    offQuickStart: ({commit}) => {
      commit('OFF_QUICK_START');
    },
    switchShowLargeGraph: ({commit}) => {
      commit('SWITCH_SHOW_LARGE_GRAPH');
    }, 
    onPlotHabitatGraph: ({commit}) => {
      commit('ON_PLOT_HABITAT_GRAPH');
    },
    offPlotHabitatGraph: ({commit}) => {
      commit('OFF_PLOT_HABITAT_GRAPH');
    },
    onPlotWaterQualityGraph: ({commit}) => {
      commit('ON_PLOT_WATER_QUALITY_GRAPH');
    },
    offPlotWaterQualityGraph: ({commit}) => {
      commit('OFF_PLOT_WATER_QUALITY_GRAPH');
    },
    setHabitatLegendYear: ({commit}, payload) => {
      commit('SET_HABITAT_LEGEND_YEAR', payload);
    },      
  }
});