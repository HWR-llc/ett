<template>
	<div>
    <app-map-legend class="legend"></app-map-legend>
    <transition name="fade" mode="out-in">
      <app-water-quality-floater class="floater" v-if="waterQualityGraph"></app-water-quality-floater>
    </transition>   
    <l-map :style="mapStyleObj" :zoom="zoom" :center="center" ref="ettMap">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-geo-json 
        :geojson="embaymentsGeojson" 
        :options="optionsEmbayment" 
        :options-style="embStyle"
        ref="embaymentsBase"></l-geo-json>
      <div v-if="baseLayer">
        <l-geo-json :geojson="bkgrdGeojson.tidalFlats.data.his" v-if="habitat=='tidal flats'" :options-style="tfStyleHis" ref="his">></l-geo-json>	  		
        <l-geo-json :geojson="bkgrdGeojson.saltMarsh.data.his" v-if="habitat=='salt marsh'" :options-style="smStyleHis"  ref="his"></l-geo-json>	
        <l-geo-json :geojson="bkgrdGeojson.eelGrass.data.his" v-if="habitat=='eelgrass'" :options-style="egStyleHis" ref="his"></l-geo-json>
        <l-geo-json :geojson="bkgrdGeojson.tidalFlats.data.cur" v-if="habitat=='tidal flats'" :options-style="tfStyleCur" ref="cur"></l-geo-json>	  		
        <l-geo-json :geojson="bkgrdGeojson.saltMarsh.data.cur" v-if="habitat=='salt marsh'" :options-style="smStyleCur" ref="cur"></l-geo-json>	
        <l-geo-json :geojson="bkgrdGeojson.eelGrass.data.cur" v-if="habitat=='eelgrass'" :options-style="egStyleCur" ref="cur"></l-geo-json>
      </div>
      <div v-if="metricLayer">
        <l-geo-json :geojson="embaymentsGeojson" v-if="habitat=='tidal flats'" :options-style="tidalFlatsColorer">></l-geo-json>	  		
        <l-geo-json :geojson="embaymentsGeojson" v-if="habitat=='salt marsh'" :options-style="saltMarshColorer">></l-geo-json>	  
        <l-geo-json :geojson="embaymentsGeojson" v-if="habitat=='eelgrass'" :options-style="eelgrassColorer">></l-geo-json>	  
      </div>
      <div v-if="pointsLayer">
        <div v-for="s in stations" :key="s.id">
          <l-circle-marker
            :lat-lng="[s.geometry.coordinates[1], s.geometry.coordinates[0]]"
            :fillColor="circleColorer(s.properties.parameter_list)"
            fillOpacity=1
            :color="circleColorer(s.properties.parameter_list)"
            radius=5
            @click="plotData(s.id, s.properties.parameter_list)"
          >
            <l-tooltip ref="tooltip" style="padding-left: 15px; padding-right: 15px">
              <app-station-tooltip 
                :stationId="s.id"
                :parameterList="s.properties.parameter_list" 
                :organizationName="s.properties.organization_identifier">
              </app-station-tooltip>
            </l-tooltip>
          </l-circle-marker>
        </div>
      </div>
    </l-map>
	</div>
</template>

<script>
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

import {LMap, LTileLayer, LGeoJson, LCircleMarker, LTooltip} from 'vue2-leaflet';
import { interpolateOranges, interpolateGreens, interpolatePurples } from 'd3-scale-chromatic'
import StationTooltip from './subs/StationTooltip.vue'
import MapLegend from './subs/MapLegend.vue'
import WaterQualityFloater from '../components/WaterQualityFloater.vue'
import { imageLibraryHabitat } from '../lib/constants'
export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LCircleMarker,
    LTooltip,
    appStationTooltip: StationTooltip,
    appMapLegend: MapLegend,
    appWaterQualityFloater: WaterQualityFloater
  },
  computed: {
    baseLayer() {
      return this.$store.state.baseLayer;
    },
    pointsLayer() {
      return this.$store.state.pointsLayer;
    },
    metricLayer() {
      return this.$store.state.metricLayer;
    },
    habitat() {
      return this.$store.state.habitat;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    waterQualityGraph() {
      return this.$store.state.waterQualityGraph;
    },
    embStyle() {
      return () => {
        return {
          weight: 1,
          color: "black",
          opacity: 0.5,
          fillColor: 'white',
          fillOpacity:0
        };
      };
    },
    smStyleCur() {
      return () => {
        return {
          stroke: false,
          fillColor: this.imageLibraryHabitat['salt marsh'].currentColor,
          fillOpacity: 0.85,
          interactive: false
        };
      };
    },	    
    smStyleHis() {
      return () => {
        return {
          stroke: false,
          fillColor: this.imageLibraryHabitat['salt marsh'].historicColor,
          fillOpacity: 0.5,
          interactive: false
        };
      };
    },
    egStyleCur() {
      return () => {
        return {
          stroke: false,
          fillColor: this.imageLibraryHabitat['eelgrass'].currentColor,
          fillOpacity: 0.85,
          interactive: false
        };
      };
    },	    
    egStyleHis() {
      return () => {
        return {
          stroke: false,
          fillColor: this.imageLibraryHabitat['eelgrass'].historicColor,
          fillOpacity: 0.5,
          interactive: false
        };
      };
    },
    tfStyleCur() {
      return () => {
        return {
          stroke: false,
          fillColor: this.imageLibraryHabitat['tidal flats'].currentColor,
          fillOpacity: 0.85,
          interactive: false
        };
      };
    },	    
    tfStyleHis() {
      return () => {
        return {
          stroke: false,
          fillColor: this.imageLibraryHabitat['tidal flats'].historicColor,
          fillOpacity: 0.5,
          interactive: false
        };
      };
    },
    metricStyleComp() {
      return () => {
        return {
          stroke: false,
          fillColor: '#FF0000',
          fillOpacity:0.5,
          interactive: false
        };
      };
    },
    optionsEmbayment() {
      return {
        onEachFeature: this.onEachEmbaymentFunction
      };
    },
    onEachEmbaymentFunction() {
      return (feature, layer) => {
        layer.on({
          click: (event) => {
            this.$refs.ettMap.mapObject.flyToBounds(event.target.getBounds());
            this.$store.dispatch('setEmbayment', event.target.feature.properties.NAME);
            let newHabitatData = {
                'eelgrass': {
                  data: [
                    {year: 2000, value: feature.properties.EG_HIST},
                    {year: 2005, value: feature.properties.EG_CURR},
                    {year: 2050, value: feature.properties.EG_TRGT}
                  ],
                  units: 'Acres'
                },
                'salt marsh': {
                  data: [
                    {year: 2000, value: feature.properties.SM_HIST},
                    {year: 2005, value: feature.properties.SM_CURR},
                    {year: 2050, value: feature.properties.SM_TRGT}
                  ],
                  units: 'Acres'
                },
                'tidal flats': {
                  data: [
                    {year: 2000, value: feature.properties.TF_HIST},
                    {year: 2005, value: feature.properties.TF_CURR},
                    {year: 2050, value: feature.properties.TF_TRGT}
                  ],
                  units: 'Acres'
                },
                'diadromous fish': {
                  data: [
                    {year: 2000, value: feature.properties.DF_HIST},
                    {year: 2005, value: feature.properties.DF_CURR},
                    {year: 2050, value: feature.properties.DF_TRGT}
                  ],
                  units: 'Miles'
                }
            }
            this.$store.dispatch('setHabitatGraphData', newHabitatData);
          }
        });
        layer.bindTooltip(feature.properties.NAME);
      };
    }
  },
  data () {
    return {
      imageLibraryHabitat: imageLibraryHabitat,
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
      zoom: 9,
      center: [42.23673, -70.65864],
      bkgrdGeojson: {
        tidalFlats: {
          name: 'tidal flats',
          data: {
            cur: null,
            his: null		    			
          }
        },
        saltMarsh: {
          name: 'salt marsh',
          data: {
            cur: null,
            his: null		    			
          }
        },
        eelGrass: {
          name: 'eelgrass',
          data: {
            cur: null,
            his: null		    			
          }
        }
      },
      embaymentsGeojson: null,
      stations: null,
      mapStyleObj: {
        height: Math.floor(window.innerHeight - 100) + 'px',
        width: '100%',
      }
    };
  },
  methods: {
    circleColorer(parameterList) {
      if (parameterList.includes(this.waterQuality)) {
        return '#00B0F0';
      } else {
        return '#808080';
      }
    },
    colorScale(value, geoHabitat) {
      if (geoHabitat == 'tidal flats') {
        return interpolateOranges(value);
      } else if (geoHabitat == 'salt marsh') {
        return interpolateGreens(value);
      } else if (geoHabitat == 'eelgrass') {
        return interpolatePurples(value)
      } else if (geoHabitat == 'diadromous fish') {
        return interpolatePurples(value);
      } else {
        return '#ffffff';
      }
    },
    embaymentColorer(value, geoHabitat) {
      let lowerBinValue = null;
      if (value < 20) {
        lowerBinValue = 0.0
      } else if (value >= 20 && value < 40) {
        lowerBinValue = 0.2;
      } else if (value >= 40 && value < 60) {
        lowerBinValue = 0.4;        
      } else if (value >= 60 && value < 80) {
        lowerBinValue = 0.6; 
      } else if (value >= 80) {
        lowerBinValue = 0.8; 
      } 

      let featureColor = this.colorScale(lowerBinValue, geoHabitat);
      let featureOpacity = 0;
      if (value > 0) {
        featureOpacity = 0.5
      }
      return {
          stroke: false,
          fillColor: featureColor,
          fillOpacity: featureOpacity,
          interactive: false
        };
    },
    tidalFlatsColorer(feature) {
      return this.embaymentColorer(feature.properties.TF_PERC, 'tidal flats');
    },
    saltMarshColorer(feature) {
      return this.embaymentColorer(feature.properties.SM_PERC, 'salt marsh');
    },
    eelgrassColorer(feature) {
      return this.embaymentColorer(feature.properties.EG_PERC, 'eelgrass');
    },
    diadromousFishColorer(feature) {
      return this.embaymentColorer(feature.properties.DF_PERC, 'diadromous fish');
    },
    parameterMapper(wqCounts) {
      const waterQualityMap = new Map();
      waterQualityMap.set('CHLA', 'chlorophyl-a');
      waterQualityMap.set('DO', 'dissolved oxygen');
      waterQualityMap.set('ECOLI', 'e. coli');
      waterQualityMap.set('ENT', 'enterococcus');
      waterQualityMap.set('PH', 'pH');
      waterQualityMap.set('SAL', 'salinity');
      waterQualityMap.set('TEMP', 'temperature');
      waterQualityMap.set('TN', 'nitrogen');
      waterQualityMap.set('TP', 'phosphorus');
      waterQualityMap.set('TURB', 'turbidity');    
      let activeParameters = [];
      Object.entries(wqCounts).forEach(([key, value]) => {
        if (value > 0 && key != 'CHLA') {
          activeParameters.push(waterQualityMap.get(key));
        } 
      });
      return activeParameters;

    },
    plotData(stationId, parameterList) {
      if (parameterList.includes(this.waterQuality)) {
        this.$store.dispatch('onWaterQualityGraph');
        this.$nextTick(() => {
          this.$store.dispatch('setWaterQualityGraphVariable', this.waterQuality);
          this.$store.dispatch('setStation', stationId);
        })
      }
    }
  },
  created() {
    // fetch embayments
    fetch("./data/embayments_targets_wgs.geojson")
      .then(response => {
        return response.json()
      }).then(json => {
        this.embaymentsGeojson = json;
    })
    // fetch habitats
    const fileArray = {
      tidalFlats: {
        cur: "./data/tidal_flats_current_wgs.geojson",
        his: "./data/tidal_flats_historic_wgs.geojson"
      },
      saltMarsh: {
        cur: "./data/salt_marsh_current_wgs.geojson",
        his: "./data/salt_marsh_historic_wgs.geojson"
      },
      eelGrass: {
        cur: "./data/eelgrass_current_wgs.geojson",
        his: "./data/eelgrass_historic_wgs.geojson"
      },
    }
    Object.entries(this.bkgrdGeojson).forEach(([key, value]) => {
      Object.entries(value.data).forEach(([alt]) => {
        fetch(fileArray[key][alt])
          .then(response => {
            return response.json()
          }).then(json => {
            this.bkgrdGeojson[key].data[alt] = json;
        })					
      })
    })
    // fetch water quality stations
    fetch('./data/stations.json')
    .then(response => {
      return response.json()
    }).then(json => {
      this.stations = json.features;
      this.stations.forEach(station => {
        station.properties['parameter_list'] = this.parameterMapper(station.properties.wq_counts);
      });
    })
  },
  updated() {
    this.$nextTick(() => {
      // console.log(this.$refs.his.mapObject);
      this.$refs.his.mapObject.bringToBack();

    })
  }
}
</script>
<style scoped>
.legend {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 1000;
}
.floater {
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 2000; 
}
</style>