<template>
  <div>
    <v-card class="elevation-10 ma-4" color="blue-grey lighten-4">
        <v-toolbar dark color="blue-grey darken-4">
          <div class="text-xs-center">
            <v-toolbar-title class="white--text">My Favorite @'s</v-toolbar-title>
            </div>
        </v-toolbar>
<<<<<<< HEAD
<<<<<<< HEAD
        <v-layout row wrap class="ma-4" >
          <v-flex xs4 class="pa-4" v-for="(at, index) in ats">
            <v-card class="elevation-10">
              <v-card-media class="image" @click="clicked(at)" :src="at.imageUrl" height="200px">
=======
        <v-layout row wrap class="ma-4" >
          <v-flex xs4 class="pa-4" v-for="(at, index) in ats">
            <v-card class="elevation-10">
              <v-card-media :src="at.imageUrl" height="200px">
>>>>>>> frontend
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{at.place.name}}</h3>
                  <div>{{at.describe}}</div>
                </div>
<<<<<<< HEAD
                <v-spacer></v-spacer>
                  <v-badge class="ma-3" color="red">
<<<<<<< HEAD
                    <span slot="badge">{{at.notifications}}</span>
=======
                    <span slot="badge">2</span>
>>>>>>> claker
                    <v-icon large color="grey">priority_high</v-icon>
                    </v-badge>
=======
        <v-layout row wrap class="ma-4">
          <v-flex xs4 class="pa-4">
            <v-card class="elevation-10">
              <v-card-media :src="require('@/assets/newyork.jpg')" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-4">
            <v-card class="elevation-10">
              <v-card-media :src="require('@/assets/newyork.jpg')" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-4">
            <v-card class="elevation-10">
              <v-card-media :src="require('@/assets/newyork.jpg')" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-4">
            <v-card class="elevation-10">
              <v-card-media :src="require('@/assets/newyork.jpg')" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                </div>
>>>>>>> pritesh
=======
>>>>>>> frontend
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
  </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
import * as firebase from 'firebase'
=======
>>>>>>> pritesh
=======
import * as firebase from 'firebase'
>>>>>>> frontend

export default {

  data () {
    return {
<<<<<<< HEAD
<<<<<<< HEAD
      ats: [],
<<<<<<< HEAD
      header: '',

=======
      header: ''
>>>>>>> claker
=======
      ats: [],
      header: ''
>>>>>>> frontend
    }
  },
  created() {

    var email = firebase.auth().currentUser.email;
    console.log(email);
    var ref = firebase.database().ref('/profiles');
    ref.once('value').then((snap)=>{
      snap.forEach((prof)=>{
        if(prof.val().email == email) {
          console.log(prof.val().key);
          //this.userKey = prof.val().key;
          var ref1 = firebase.database().ref('/profiles/' + prof.val().key);
          var ats = [];
          ref1.once('value').then((snap1)=>{
            snap1.val().favorites.forEach((fav)=>{
              var ref3 = firebase.database().ref('/ats/' + fav);
              ref3.once('value').then((at) => {
                ats.push(at.val());
                this.ats = ats;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> claker
=======
>>>>>>> frontend
                console.log(this.ats);
              });
            });
          });
        }
      });
    });

<<<<<<< HEAD
  },
  methods: {
    clicked(at) {
        console.log(at);
        this.$router.push('/view/' + at.key);
    },
=======

    }
>>>>>>> pritesh
=======
>>>>>>> frontend
  }
}

</script>
<<<<<<< HEAD
<style scoped>
  .image:hover {
<<<<<<< HEAD
      cursor: pointer;
  }


</style>
=======
      cursor: pointer; 
  }


</style>
>>>>>>> claker
=======
>>>>>>> pritesh
