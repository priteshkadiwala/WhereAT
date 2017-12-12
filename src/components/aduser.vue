<template>
  <div>
        <v-layout row wrap class="ma-4" >
<<<<<<< HEAD
<<<<<<< HEAD
          <v-flex xs6 class="pa-4" v-for="(user, index) in users">
=======
          <v-flex xs4 class="pa-4" v-for="(user, index) in users">
>>>>>>> claker
=======
          <v-flex xs4 class="pa-4" v-for="(user, index) in users">
>>>>>>> frontend
            <v-card class="elevation-10">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{user.username}}</h3>
                  <div>{{user.email}}</div>
                </div>
                <v-spacer></v-spacer>
<<<<<<< HEAD
<<<<<<< HEAD
                <v-btn class="" color="blue darken-1" flat @click="makeAdmin(user)">Make user Admin</v-btn>
=======
>>>>>>> claker
=======
>>>>>>> frontend
                <v-btn class="" color="blue darken-1" flat @click="deletes(user)">Delete</v-btn>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>

  </div>
</template>

<script>
import * as firebase from 'firebase'
<<<<<<< HEAD
=======
//import * as admin from 'firebase-admin'
>>>>>>> frontend
  export default {
    components: {

    },
    data () {
      return {
        users: [],
        header: '',
        key: '',
      }

    },
    created() {
      var ref = firebase.database().ref('/profiles');
      var ats = [];
      ref.once('value').then((snap)=>{
        snap.forEach((at)=>{
          ats.push(at.val());
          this.users = ats;
        });
      });
    },
    methods: {
      deletes(user){
<<<<<<< HEAD
<<<<<<< HEAD
        this.users.splice(this.users.indexOf(user),1);
        var ref = firebase.database().ref('/profiles/' + user.key);
        ref.remove();
      },
      makeAdmin(user) {
        var ref = firebase.database().ref('/profiles/' + user.key);
        ref.update({admin: true});
=======
        var ref = firebase.database().ref('/profiles/' + user.key);
        ref.remove();
        location.reload();
>>>>>>> claker
=======
        var temp = user.key;
        var ref = firebase.database().ref('/profiles/' + temp);
        ref.remove();
        location.reload();
>>>>>>> frontend
      }
    }
  }


</script>

<style scoped>


</style>
