<template>
  <div>
    <vue-google-autocomplete
      ref="address"
      id="map"
      classname="form-control"
      placeholder="Please type your address"
      v-on:placechanged="getAddressData"
    >
    </vue-google-autocomplete>
    <gmap-map id="gMaps" :center="center" :zoom="5">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" v-on:click="submit">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import VueGoogleAutocomplete from 'vue-google-autocomplete';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBQAPXarYYET2DO3QGvV0kbcpZ8O6lIiqk'
    // libraries: 'places', //// If you need to use place input
  }
});

export default {
  components: { VueGoogleAutocomplete },

  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }],
      address: ''
    }
  },
  mounted() {
      // To demonstrate functionality of exposed component functions
      // Here we make focus on the user input
      this.$refs.address.focus();
  },
  methods: {
      /**
      * When the location found
      * @param {Object} addressData Data of the found location
      * @param {Object} placeResultData PlaceResult object
      */
      getAddressData: function (addressData, placeResultData) {
          this.address = addressData;
          var position = {lat: this.address.latitude, lng: this.address.longitude};
          this.markers.push(position);
          this.center = position;
          //this.$router.go(this.$router.currentRoute)

      },
      submit: function(){
        this.$router.push('/atvue');
      }
  },
  watch: {
    '$route'(to, from) {
      // Call resizePreserveCenter() on all maps
      Vue.$gmapDefaultResizeBus.$emit('resize')
    }
  }
};
</script>

<style scoped>
#gMaps{
  margin-top: 100px;
  width: 500px;
  height: 250px;
}

.container {
  height: 100%;
  position: relative;
}
input {
  font-size: 12px;
}
h1 {
  color: #525454;
  font-size: 22px;
  margin: 0 0 10px 0;
  text-align: center;
}
#hide-listings,
#show-listings {
  width: 48%;
}
hr {
  background: #D0D7D9;
  height: 1px;
  margin: 20px 0 20px 0;
  border: none;
}
.options-box {
  background: #fff;
  border: 1px solid #999;
  border-radius: 3px;
  height: 100%;
  line-height: 35px;
  padding: 10px 10px 30px 10px;
  text-align: left;
  width: 340px;
}
.text {
  font-size: 12px;
}
#toggle-drawing {
  width: 27%;
  position: relative;
  margin-left: 10px;
}
#zoom-to-area-text {
  position: relative;
  width: 70%;
}
#zoom-to-area {
  width: 24%;
}


</style>
