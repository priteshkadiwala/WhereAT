<template>
  <div>
    <v-card class="elevation-10 ma-4" color="blue-grey lighten-4">
      <v-toolbar dark color="red darken-4">
          <div class="text-xs-center">
            <v-toolbar-title class="white--text">Account Information</v-toolbar-title>
            </div>
        </v-toolbar>
        <div class="text-xs-center mt-3">

          <v-chip color="orange" text-color="white">
            Admin
            <v-icon right>star</v-icon>
          </v-chip>

          <v-chip color="primary" text-color="white">
            <v-avatar class="blue darken-4">{{this.votes}}</v-avatar>
            Votes
          </v-chip>

          <v-chip color="red" text-color="white">
            <v-avatar class="red darken-4">{{this.comments}}</v-avatar>
            Comments
          </v-chip>

          <v-chip color="green" text-color="white">
            <v-avatar class="green darken-4">1</v-avatar>
            Years
          </v-chip>

          <v-chip close color="teal" text-color="white">
            <v-avatar>
              <v-icon>check_circle</v-icon>
            </v-avatar>
            Confirmed
          </v-chip>

          <v-layout  class="ma-4">
            <v-flex xs4 >
                <v-text-field
                  name="input-7-1"
                  v-model="email"
                  label="Email"
                  disabled
                ></v-text-field>
                <v-text-field
                  name="input-7-1"
                  v-model="username"
                  label="Username"
                  auto-grow
                  :disabled="disabled"
                ></v-text-field>
                <v-text-field
                  name="input-7-1"
                  v-model="first"
                  label="First name"
                  auto-grow
                  :disabled="disabled"
                ></v-text-field>
                <v-text-field
                  name="input-7-1"
                  v-model="last"
                  label="Last name"
                  auto-grow
                  :disabled="disabled"
                ></v-text-field>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-card-actions v-if="!but">
            <v-btn color="red darken-1" flat @click="clicked">Edit Account</v-btn>
            <v-btn color="red darken-1" flat @click.stop="dialog = true">Delete Account</v-btn>
            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete the account?</v-card-title>
                <v-card-text>If you delete the account:
                  <br />
                  You will need sign up again
                  <br />
                  All your data will be deleted
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat="flat" @click="dialog = false">Disagree</v-btn>
                  <v-btn color="green darken-1" flat="flat" @click="remove">Agree</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
          <v-card-actions v-if="but">
            <v-btn color="red darken-1" flat @click="save">Save Details</v-btn>
          </v-card-actions>
        </div>
      </v-card>
  </div>

</template>

<script>
import * as firebase from 'firebase'
import {bus} from '../main'
export default {

  data () {
    return {

      disabled: true,
      votes: '',
      comments: '',
      email: '',
      first: '',
      username: '',
      last: '',
      but: false,
      key:'',
      dialog: ''
    }
  },
  mounted(){
    var email = firebase.auth().currentUser.email;
    var ref = firebase.database().ref('/profiles');
    ref.once('value').then((snap)=>{
      snap.forEach((prof)=>{
        if (prof.val().email == email) {
          this.email = prof.val().email;
          this.first = prof.val().first;
          this.last = prof.val().last;
          this.username = prof.val().username;
          this.key = prof.val().key;
          this.votes = prof.val().votes;
          this.comments = prof.val().comments;
        }
      });
    })
  },
  methods: {
    clicked() {
      this.disabled = false;
      this.but = true;
    },
    save() {
      console.log(this.user);
      var ref = firebase.database().ref('/profiles/' + this.key)
      ref.update({
        first: this.first,
        last: this.last,
        username: this.username
      });
      this.disabled = true;
      this.but = false;
    },
    remove() {
      this.dialog = false
    	var ref = firebase.database().ref('/profiles/' + this.key);
    	ref.remove();
    	firebase.auth().currentUser.delete();
    	firebase.auth().signOut();
      bus.$emit('signChange', false);
      bus.$emit('isAdmin', false);
      this.$router.push('/');

    }
  }
}

</script>
