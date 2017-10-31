<template>
  <div>
    <v-toolbar
      color="white"
      floating
      dense
      class="ma-5"
      id="float"
    >
        <v-text-field prepend-icon="search" ref="autocomplete" hide-details single-line></v-text-field>
    </v-toolbar>

    <gmap-map
      id="gmap"
      :center="center"
      :zoom="7"
      style="width: 100vw; height: 100vh"
    >

      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>



  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
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
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  },
  watch: {
    '$route'(to, from) {
      // Call resizePreserveCenter() on all maps
      Vue.$gmapDefaultResizeBus.$emit('resize')
    }
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
