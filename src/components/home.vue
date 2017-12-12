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
              placeholder="Enter a place"
              types="establishment"
              v-on:placechanged="getAddressData"
        ></vuetify-google-autocomplete>

        

    </v-toolbar>

    <gmap-map
      ref="map"
      id="gmap"
      v-on:click="mapClicked"
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
      <gmap-marker
        v-for="(m,index) in droppedLocs"
        :position="m"
        :clickable="true"
        :animation="2"
        v-if="isRadSearch == true"
        @click="clicked(index)"
      ></gmap-marker>
      <gmap-circle v-if="isRadSearch == true" :radius="radius" :options="{editable: true}"  v-on:radius_changed="updateCircle('radius', $event)" :center="droppedPin"></gmap-circle>
    </gmap-map>



  </div>
</template>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false&libraries=geometry
"></script>
<script>
import * as firebase from 'firebase';
import * as VueGoogleMaps from 'vue2-google-maps';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
import Vue from 'vue';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBQAPXarYYET2DO3QGvV0kbcpZ8O6lIiqk',
    libraries: 'places' //// If you need to use place input
  }
});
export default {
  data () {
    return {
      center: {lat: 40.41937731534847, lng: -86.90005302429199},
      exists: false,
      key: '',
      destination: {lat: 10.0, lng:10.0},
      position1: {lat: 10.0, lng:10.0},
      name: '',
      firstBoxFull: false,
      isRadSearch: false,
      position: {lat: 40.41937731534847, lng:-86.90005302429199},
      droppedPin: {lat: 0, lng: 0},
      droppedLocs: [],
      droppedAt: [],
      radius: 5000,
    }
  },
  watch: {
    '$route'(to, from) {
      // Call resizePreserveCenter() on all maps
      Vue.$gmapDefaultResizeBus.$emit('resize')
    }
  },
  methods: {
    updateCircle(radius, $event) {
        this.droppedLocs = [];
        this.radius = $event;
        var ref = firebase.database().ref('/ats');
        this.center = this.droppedPin;
        ref.once('value').then(snap=> {
          snap.forEach(at=>{
            //console.log(addressData);

            var target = new google.maps.LatLng(at.val().place.lat, at.val().place.long);

            var center = new google.maps.LatLng(this.center.lat, this.center.lng);
            var distance = google.maps.geometry.spherical.computeDistanceBetween(center, target) / 1000;
            if (distance < (this.radius / 1000)) {
                this.droppedLocs.push(new google.maps.LatLng(at.val().place.lat, at.val().place.long));
                this.droppedAt.push(at.val())
                console.log(this.droppedLocs);
            }
        });

      });
    },
    mapClicked(mouseArgs) {
        this.droppedLocs = [];
        var ref = firebase.database().ref('/ats');
        var vm = this;

        this.droppedPin.lat = mouseArgs.latLng.lat();
        this.droppedPin.lng = mouseArgs.latLng.lng();
        this.center = this.droppedPin;
        ref.once('value').then(snap=> {
          snap.forEach(at=>{
            //console.log(addressData);

            var target = new google.maps.LatLng(at.val().place.lat, at.val().place.long);

            var center = new google.maps.LatLng(this.center.lat, this.center.lng);
            var distance = google.maps.geometry.spherical.computeDistanceBetween(center, target) / 1000;
            if (distance < (this.radius / 1000)) {
                this.droppedLocs.push(new google.maps.LatLng(at.val().place.lat, at.val().place.long));
                console.log(at.val());
                this.droppedAt.push(at.val());
                console.log(this.droppedLocs);
            }
        });

      });
      this.isRadSearch = true;
    },
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
              var pack = {
                lat: this.position1.lat,
                lng: this.position1.lng,
                name: this.name
              };
              this.$router.push('/create');
              //console.log(pack);
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
        this.name = placeResultData.name;
        this.searchLoc(this.position1);
    },
    clicked(index){
      console.log(index);
      if (isNaN(index)) {
        this.$router.push('/view/' + this.key);
      }
      else {
        this.$router.push('/view/' + this.droppedAt[index].key);
      }
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

          /*var temp1;
          var bool = false;*/
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
           this.position1.lat = position.coords.latitude;
           this.position1.lng = position.coords.longitude;
           this.position = {lat: position.coords.latitude, lng: position.coords.longitude};
           this.center = {lat: position.coords.latitude, lng: position.coords.longitude};
           Vue.$gmapDefaultResizeBus.$emit('resize');
          /*var tempPos = {lat: 0, lng: 0};
          tempPos.lat = position.coords.latitude;
          tempPos.lng = position.coords.longitude;
          var temp;
          var geocoder = new google.maps.Geocoder;
          geocoder.geocode({location: tempPos}, (results, status) => {
            if (status == 'OK') {
              console.log(results);
              temp = results[0].address_components[1].long_name;
              console.log(temp);
              geocoder.geocode({address: temp}, (results, status) =>{
                if (status == 'OK') {
                  console.log(results[0].geometry.location.lat());
                  console.log(results[0].geometry.location.lng());
                  temp1 = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
                  bool = true;
                  this.searchLoc(temp1);
                }
              });
            }*/
          });
          this.searchLoc(this.position1);
          Vue.$gmapDefaultResizeBus.$emit('resize');
      },
      //console.log(this.position1);
      //this.searchLoc(this.position1);
      //console.log(this.currentLocation);
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
