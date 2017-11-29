<template>
  <div>
    <v-card class="elevation-10 ma-4" color="blue-grey lighten-4">
        <v-toolbar dark color="blue-grey darken-4">
          <div class="text-xs-center">
            <v-toolbar-title class="white--text">My Favorite @'s</v-toolbar-title>
            </div>
        </v-toolbar>
        <v-layout row wrap class="ma-4" >
          <v-flex xs4 class="pa-4" v-for="(at, index) in ats">
            <v-card class="elevation-10">
              <v-card-media class="image" @click="clicked(at)" :src="at.imageUrl" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{at.place.name}}</h3>
                  <div>{{at.describe}}</div>
                </div>
                <v-spacer></v-spacer>
                  <v-badge class="ma-3" color="red">
                    <span slot="badge">2</span>
                    <v-icon large color="grey">priority_high</v-icon>
                    </v-badge>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
  </div>
</template>

<script>
import * as firebase from 'firebase'

export default {

  data () {
    return {
      ats: [],
      header: ''
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
                console.log(this.ats);
              });
            });
          });
        }
      });
    });

  },
  methods: {
    clicked(at) {
        console.log(at);
        this.$router.push('/view/' + at.key);
    },
  }
}

</script>
<style scoped>
  .image:hover {
      cursor: pointer; 
  }


</style>