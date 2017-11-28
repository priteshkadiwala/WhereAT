<template>
  <div>
        <v-layout row wrap class="ma-4" >
          <v-flex xs4 class="pa-4" v-for="(user, index) in users">
            <v-card class="elevation-10">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{user.username}}</h3>
                  <div>{{user.email}}</div>
                </div>
                <v-spacer></v-spacer>
                <v-btn class="" color="blue darken-1" flat @click="deletes(user)">Delete</v-btn>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>

  </div>
</template>

<script>
import * as firebase from 'firebase'
//import * as admin from 'firebase-admin'
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
        var temp = user.key;
        var ref = firebase.database().ref('/profiles/' + temp);
        ref.remove();
        location.reload();
      }
    }
  }


</script>

<style scoped>


</style>
