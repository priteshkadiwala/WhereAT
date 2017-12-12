<template>
  <div>

        <v-layout row wrap class="ma-4" >
          <v-flex xs4 class="pa-4" v-for="(at, index) in ats">
            <v-card class="elevation-10">
              <v-card-media :src="at.imageUrl" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{at.place.name}}</h3>
                  <div>{{at.describe}}</div>
                  <div>{{at.votes}}</div>
                </div>
                <v-spacer></v-spacer>
                <v-btn class="" color="blue darken-1" flat @click="deletes(at)">Delete</v-btn>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> claker
=======
        
>>>>>>> frontend
  </div>
</template>

<script>
import * as firebase from 'firebase'
  export default {
    components: {

    },
    data () {
      return {
        items: [
          'Where@',
          'Users'
        ],
        ats: [],
        header: '',
        key: '',
      }

    },
    created() {
      var ref = firebase.database().ref('/ats');
      var ats = [];
      ref.once('value').then((snap)=>{
        snap.forEach((at)=>{
          ats.push(at.val());
          this.ats = ats;
        });
      });
    },
    methods: {
      deletes(at){
<<<<<<< HEAD
<<<<<<< HEAD
        this.ats.splice(this.ats.indexOf(at),1);
        var ref = firebase.database().ref('/ats/' + at.key);
        ref.remove();
=======
        var ref = firebase.database().ref('/ats/' + at.key);
        ref.remove();
        location.reload();
>>>>>>> claker
=======
        var ref = firebase.database().ref('/ats/' + at.key);
        ref.remove();
        location.reload();
>>>>>>> frontend
      }
    }
  }


</script>

<style scoped>


</style>
