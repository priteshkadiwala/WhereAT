<template>
  <div>
    <v-toolbar
      color="white"
      floating
      dense
      class="ma-5"
      id="float"
    >
        <vue-google-autocomplete
              id="map"
              placeholder="Enter address"
              types="(regions)"
              v-on:placechanged="getAddressData"
        ></vue-google-autocomplete>

    </v-toolbar>

    <gmap-map
      ref="map"
      id="gmap"
      :center="center"
      :zoom="7"
      style="width: 100vw; height: 100vh"
    >

      <gmap-marker
        :position="position"
        :clickable="true"
        :animation="2"
        @click="clicked"
      ></gmap-marker>
    </gmap-map>

    <v-btn @click="calculateAndDisplayRoute">directions</v-btn>

  </div>
</template>

<script>
import * as firebase from 'firebase';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import Vue from 'vue';
import {bus} from '../main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBQAPXarYYET2DO3QGvV0kbcpZ8O6lIiqk',
    libraries: 'places' //// If you need to use place input
  }
});

export default {

  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      exists: false,
      key: '',
      destination: {lat: 10.0, lng:10.0}
      //position: {lat: 10.0, lng: 10.0}
    }
  },
  watch: {
    '$route'(to, from) {
      // Call resizePreserveCenter() on all maps
      Vue.$gmapDefaultResizeBus.$emit('resize')
    }
  },
  methods: {
    getAddressData (addressData, placeResultData) {
        var ref = firebase.database().ref('/ats');
        var vm = this;
        var check = false;
        this.destination.lat = 39.768377
        this.destination.lng = -86.158042

        ref.once('value').then(snap=> {
          snap.forEach(at=>{

            console.log(addressData);
            console.log(at.val().place.lat == addressData.latitude && at.val().place.long == addressData.longitude);
            if(at.val().place.lat == addressData.latitude && at.val().place.long == addressData.longitude){
              this.position = {lat: addressData.latitude, lng: addressData.longitude};
              this.center = {lat: addressData.latitude, lng: addressData.longitude};
              check = true;
              this.key = at.key
            }


          });
          //
          if(!check) {


              this.$router.push('/create');
          }

        });
        //console.log(this.exists);


        //console.log(this.markers);
    },
    clicked(){

      this.$router.push('/view/' + this.key);
    },
    calculateAndDisplayRoute() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.$refs.map.$mapObject);
        directionsService.route({
          origin: this.center,
          destination: this.destination,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
  },
	components: {
		VueGoogleAutocomplete
	}
}

</script>

<style scoped>
#float{
  position: absolute;
  z-index: 2;
}

#gmap{
  position: relative;
  z-index: 1;
}

</style>
