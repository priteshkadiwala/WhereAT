<template>
  <div>
    <v-toolbar
      color="white"
      floating
      dense
      class="ma-5"
      id="float"
    >
        <vuetify-google-autocomplete
              id="map"
              placeholder="From"
              types="establishment"
              v-on:placechanged="getAddressData"
        ></vuetify-google-autocomplete>

        <vuetify-google-autocomplete
              id="map1"
              placeholder="To"
              types="establishment"
              v-on:placechanged="getAddressData"
              class="ml-4"
        ></vuetify-google-autocomplete>
        <v-btn @click.prevent="locationSearch"><v-icon>location_searching</v-icon></v-btn>

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



  </div>
</template>

<script>
import * as firebase from 'firebase';
import * as VueGoogleMaps from 'vue2-google-maps';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
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
      destination: {lat: 10.0, lng:10.0},
      position1: {lat: 10.0, lng:10.0},
      firstBoxFull: false,
      position: {lat: 10.0, lng:10.0}
    }
  },
  watch: {
    '$route'(to, from) {
      // Call resizePreserveCenter() on all maps
      Vue.$gmapDefaultResizeBus.$emit('resize')
    }
  },
  methods: {
    searchLoc(searchObject) {
        var ref = firebase.database().ref('/ats');
        var vm = this;
        var check = false;
        ref.once('value').then(snap=> {
          snap.forEach(at=>{

            //console.log(addressData);
            console.log(at.val().place.lat == searchObject.lat && at.val().place.long == searchObject.lng);
            if(at.val().place.lat == searchObject.lat && at.val().place.long == searchObject.lng){
              this.position = {lat: searchObject.lat, lng: searchObject.lng};
              this.center = {lat: searchObject.lat, lng: searchObject.lng};
              check = true;

              this.firstBoxFull = true;
              this.key = at.key
            }


          });
          //
          if(!check) {


              this.$router.push('/create');
          }

        });
    },
    getAddressData (addressData, placeResultData) {
        this.position1.lat = addressData.latitude;
        this.position1.lng = addressData.longitude;
        if (this.firstBoxFull) {
          this.destination. lat = addressData.latitude;
          this.destination.lng = addressData.longitude;
          this.calculateAndDisplayRoute();
          this.firstBoxFull = false;
          return;
        }
        this.searchLoc(this.position1);
        /*var ref = firebase.database().ref('/ats');
        var vm = this;
        var check = false;
        this.destination.lat = 39.768377;
        this.destination.lng = -86.158042;

        ref.once('value').then(snap=> {
          snap.forEach(at=>{

            console.log(addressData);
            console.log(at.val().place.lat == addressData.latitude && at.val().place.long == addressData.longitude);
            if(at.val().place.lat == addressData.latitude && at.val().place.long == addressData.longitude){
              this.position1 = {lat: addressData.latitude, lng: addressData.longitude};
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


        //console.log(this.markers);*/
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
      },
      locationSearch : function() {
      navigator.geolocation.getCurrentPosition((position) => {

          this.position = {lat: position.coords.latitude, lng: position.coords.longitude};
          this.center = {lat: position.coords.latitude, lng: position.coords.longitude};
          Vue.$gmapDefaultResizeBus.$emit('resize');


      });
      //console.log(this.position1);


      //this.searchLoc(this.position1);
      //console.log(this.currentLocation);
    }
  },
	components: {
		VuetifyGoogleAutocomplete
	}
}

</script>

<style scoped>
#float{
  position: absolute;
  z-index: 2;
  padding: 10px 0 10px 0;
}

#float1{
  position: absolute;
  z-index: 2;
  padding: 10px 0 10px 0;

}

#gmap{
  position: relative;
  z-index: 1;
}

</style>
