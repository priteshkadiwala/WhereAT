<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container2>
              <form @submit.prevent="submit">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Sign in</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container2>
          </v-card-text>
        </v-card>
        <v-btn v-on:click="google">Google Sign in</v-btn>
        <v-btn v-on:click="Facebook">Facebook Sign in</v-btn>
        <v-btn v-on:click="Twitter">Twitter Sign in</v-btn>
        <v-btn v-on:click="forgot">Reset Password</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import * as firebase from 'firebase'

  export default {
    data () {
      return {
        email: '',
        password:''
      }
    },

    methods: {
      submit() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(user){
              console.log(firebase.auth().currentUser);
            }).catch(function(error){
              console.log("caught error: " + error);
        });      
      }, 

      google() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
          console.log(user);
          }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
      },

      facebook() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
          console.log(user);
          }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
      },

      twitter() {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
          console.log(user);
          }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
      },

      forgot() {
        firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
          console.log("Sent");
        }).catch((error)=> {
          console.log(error.errorMessage);
        });

      }
    }
  }
</script>
