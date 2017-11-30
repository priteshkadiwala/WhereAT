<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
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
                      name="UserName"
                      label="User Name"
                      id="userN"
                      v-model="userN"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="FirstName"
                      label="First Name"
                      id="first"
                      v-model="first"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="LastName"
                      label="Last Name"
                      id="last"
                      v-model="last"
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
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Sign up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
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
        password: '',
        confirmPassword: '',
        first: '',
        last: '',
        userN: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : true
      }
    },
    methods: {
     submit() {
           if(this.password === this.confirmPassword) {
             firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) =>{
               var ref = firebase.database().ref('/profiles');
               var profile = {
                 email: user.email,
                 first: this.first,
                 last: this.last,
                 username: this.userN,
                 comments: 0,
                 votes: 0
               };
               var key = ref.push(profile);
               key = key.path.pieces_[1];
               ref.child('/' + key).update({key: key}).then(function(profile){
                 console.log(profile);
                 
               });
               this.$router.push('/');
             }).bind(this).catch(function(error){
               console.log(error.message);
             });
           } else {
             console.log("Passwords do not match");
           }
         }
    google() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(user);
          var ref = firebase.database().ref('/profiles');
          var profile = {
            email: user.email,
            first: user.displayName,
            last: user.displayName,
            username: user.displayName,
            comments: 0,
            votes:0
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
          }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        })
      }, 
      facebook() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
          console.log("done");
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
          console.log(user);
          var ref = firebase.database().ref('/profiles');
          var profile = {
            email: user.email,
            first: user.displayName,
            last: user.displayName,
            username: user.displayName,
            comments: 0,
            votes:0
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
          }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorMessage);
        });
      },
      twitter() {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
          console.log("done");
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
          console.log(user);
          var ref = firebase.database().ref('/profiles');
          var profile = {
            email: user.email,
            first: user.displayName,
            last: user.displayName,
            username: user.displayName,
            comments: 0,
            votes:0
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
          }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorMessage);
        });
      }
   }
  }
</script>
