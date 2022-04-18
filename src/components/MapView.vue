<template>
	<div>
    <l-map :style="mapStyleObj" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
      <l-geo-json :geojson="embayGeojson" :options="options" :options-style="embStyle" id="habitat"></l-geo-json>
      <div v-if="baseLayer">
        <l-geo-json :geojson="bkgrdGeojson.tidalFlats.data.his" v-if="habitat=='tidal flats'" :options-style="tfStyleHis">></l-geo-json>	  		
        <l-geo-json :geojson="bkgrdGeojson.saltMarsh.data.his" v-if="habitat=='salt marsh'" :options-style="smStyleHis"></l-geo-json>	
        <l-geo-json :geojson="bkgrdGeojson.eelGrass.data.his" v-if="habitat=='eelgrass'" :options-style="egStyleHis"></l-geo-json>
        <l-geo-json :geojson="bkgrdGeojson.tidalFlats.data.cur" v-if="habitat=='tidal flats'" :options-style="tfStyleCur"></l-geo-json>	  		
        <l-geo-json :geojson="bkgrdGeojson.saltMarsh.data.cur" v-if="habitat=='salt marsh'" :options-style="smStyleCur"></l-geo-json>	
        <l-geo-json :geojson="bkgrdGeojson.eelGrass.data.cur" v-if="habitat=='eelgrass'" :options-style="egStyleCur"></l-geo-json>
      </div>
      <div v-if="pointsLayer">
        <div v-for="s in stations" :key="s.WQ_ID">
          <l-circle-marker
            :lat-lng="[s.LATITUDE, s.LONGITUDE]"
            :fillColor=circleColor
            :color=circleColor
            @click="stationSelected(s.WQ_ID, s.TYPE)"
          ></l-circle-marker>
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

import {LMap, LTileLayer, LMarker, LGeoJson, LCircleMarker} from 'vue2-leaflet';
export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    LCircleMarker
  },
  computed: {
    baseLayer() {
      return this.$store.state.baseLayer;
    },
    pointsLayer() {
      return this.$store.state.pointsLayer;
    },
    habitat() {
      return this.$store.state.habitat;
    },
    waterQuality() {
      return this.$store.state.waterQuality;
    },
    circleColor() {
      if (this.waterQuality == 'nitrogen') {
        return 'red'
      } else {
        return '#808080'
      }
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
          fillColor: '#255c33',
          fillOpacity: 0.85,
          interactive: false
        };
      };
    },	    
    smStyleHis() {
      return () => {
        return {
          stroke: false,
          fillColor: '#68f28d',
          fillOpacity: 0.5,
          interactive: false
        };
      };
    },
    egStyleCur() {
      return () => {
        return {
          stroke: false,
          fillColor: '#e319a6',
          fillOpacity: 0.85,
          interactive: false
        };
      };
    },	    
    egStyleHis() {
      return () => {
        return {
          stroke: false,
          fillColor: '#eba4d5',
          fillOpacity: 0.5,
          interactive: false
        };
      };
    },
    tfStyleCur() {
      return () => {
        return {
          stroke: false,
          fillColor: '#c96b12',
          fillOpacity: 0.85,
          interactive: false
        };
      };
    },	    
    tfStyleHis() {
      return () => {
        return {
          stroke: false,
          fillColor: '#deb187',
          fillOpacity: 0.5,
          interactive: false
        };
      };
    },
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    onEachFeatureFunction() {
      return (feature, layer) => {
        layer.bindPopup(feature.properties.NAME);
      };
    }
},
  data () {
    return {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
      zoom: 12,
      center: [41.89354, -70.03781],
      markerLatLng: [42.306, -72.0],
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
      embayGeojson: null,
      station: [],
      mapStyleObj: {
        height: Math.floor(window.innerHeight - 100) + 'px',
        width: '100%',
      }
    };
  },
  methods: {
    getEmbayment(e) {
      console.log(e);
    },
    csvToArray(str, delimiter=",") {
      //https://github.com/nsebhastian/javascript-csv-array-example/blob/master/index.html
      const headers = str.slice(0, str.indexOf("\r\n")).split(delimiter);
      const rows = str.replace(/\n/g,'').slice(str.indexOf("\r") + 1).split("\r");
      const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;			
      });
      // return the array
      return arr;
    },
    stationSelected(wqId, wqType) {
      this.$store.dispatch('setStation', wqId);
      this.$store.dispatch('setWaterQuality', wqType);
      this.$store.dispatch('setWaterQualityGraphVariable', wqType);  
      this.$store.dispatch('setActiveTab', 1);
      // alert('you clicked WQ Station: ' + wqId);
    }
  },
  created() {
    // fetch embayments
    fetch("./data/embayments_wgs.geojson")
      .then(response => {
        return response.json()
      }).then(json => {
        this.embayGeojson = json;
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
    // fetch water quality
    fetch("./data/wq_points.csv")
      .then(response => {
        return response.text()
      }).then(data => {
        const strData = this.csvToArray(data);
        strData.forEach(elem => {
          elem.WQ_ID = parseInt(elem.WQ_ID);
          elem.LONGITUDE = parseFloat(elem.LONGITUDE);
          elem.LATITUDE = parseFloat(elem.LATITUDE);						
        })
        this.stations = strData;
        // console.log(this.stations);
      })
  }
}
</script>
<style>

</style>