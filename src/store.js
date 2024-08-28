import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    habitat: null,
    waterQuality: null,
    fishRun: null,
    habitatGraphVariable: null,
    waterQualityGraphVariable: null,
    fishRunGraphVariable: null,
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
    showHabitatGraphDynamic: false,
    showDiadromousFishGraphDynamic: false,
    plotHabitatGraph: false,
    plotWaterQualityGraph: false,
    plotFishRunGraph: false,
    dfLegendColor: false,
    legendYears: {
      'eelgrass': {historic: null, current: null},
      'salt marsh': {historic: null, current: null},
      'tidal flats': {historic: null, current: null},
      'diadromous fish': {historic: null, current: null}
    }
  },
  mutations: {
    SET_DF_LEGEND_COLOR: (state, payload) => {
      state.dfLegendColor = payload;
    },
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
    SET_FISHRUN: (state, payload) => {
      state.fishRun = payload;
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
    ON_DIADROMOUS_FISH_GRAPH: state => {
      state.plotFishRunGraph = true;
    },
    OFF_DIADROMOUS_FISH_GRAPH: state => {
      state.plotFishRunGraph = false;
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
    SWITCH_SHOW_HABITAT_GRAPH_DYNAMIC: state => {
      state.showHabitatGraphDynamic = !state.showHabitatGraphDynamic;
    },
    SWITCH_SHOW_DIADROMOUS_FISH_GRAPH_DYNAMIC: state => {
      state.showDiadromousFishGraphDynamic = !state.showDiadromousFishGraphDynamic;
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
    }
  },
  actions: {
    setDFLegendColor: ({commit}, payload) => {
      commit('SET_DF_LEGEND_COLOR', payload)
    },
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
    setFishRun: ({commit}, payload) => {
      commit('SET_FISHRUN', payload)
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
    setDiadromousFishData: ({commit}, payload) => {
      commit('SET_DIADROMOUS_FISH_DATA', payload);
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
    onDiadromousFishGraph: ({commit}) => {
      commit('ON_DIADROMOUS_FISH_GRAPH');
    },
    offDiadromousFishGraph: ({commit}) => {
      commit('OFF_DIADROMOUS_FISH_GRAPH');
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
    switchShowHabitatGraphDynamic: ({commit}) => {
      commit('SWITCH_SHOW_HABITAT_GRAPH_DYNAMIC');
    }, 
    switchShowDiadromousFishGraphDynamic: ({commit}) => {
      commit('SWITCH_SHOW_DIADROMOUS_FISH_GRAPH_DYNAMIC');
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