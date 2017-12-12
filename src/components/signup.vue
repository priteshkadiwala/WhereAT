<template>
<<<<<<< HEAD
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
<<<<<<< HEAD
                      <v-alert v-if="emailTaken" color="error" icon="warning" value="true">
                        This email is already registered!
                      </v-alert>
=======
>>>>>>> claker
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
<<<<<<< HEAD
                      <v-alert v-if="userNTaken" color="error" icon="warning" value="true">
                        This username is already taken!
                      </v-alert>
=======
>>>>>>> claker
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
<<<<<<< HEAD
                    <div class="text-xs-center">
                      <v-btn type="submit">Sign up</v-btn>

                    </div>
                  </v-flex>
                </v-layout>
              </form>
              <v-layout row>

                  <v-flex xs12>
                    <div class="text-xs-center">
                      <v-btn @click="facebook" class="blue darken-3" dark>Facebook</v-btn>
                      <br />
                      <v-btn @click="google" class="red darken-3" dark>Google</v-btn>
                      <br />
                      <v-btn @click="twitter" class="light-blue darken-1" dark>Twitter</v-btn>
                    </div>
                  </v-flex>

              </v-layout>
            </v-container>
          </v-card-text>

=======
                    <v-btn type="submit">Sign up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
>>>>>>> claker
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'
<<<<<<< HEAD
import {bus} from '../main'
=======
>>>>>>> claker

  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        first: '',
        last: '',
<<<<<<< HEAD
        userN: '',
        emailTaken: false,
        userNTaken: false,
        admin: false
=======
        userN: ''
>>>>>>> claker
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
<<<<<<< HEAD
             var ref2 = firebase.database().ref('/profiles');
             ref2.once('value').then((snap) => {

               snap.forEach((prof)=> {

                 if(prof.val().username == this.userN) {
                   console.log("found");
                   this.userNTaken = true;
                   return;
                 } else {
                   this.userNTaken = false;
                 }
               });
             }).then(()=>{
             console.log(this.userNTaken);
             if(!this.userNTaken){
=======
>>>>>>> claker
             firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) =>{
               var ref = firebase.database().ref('/profiles');
               var profile = {
                 email: user.email,
                 first: this.first,
                 last: this.last,
                 username: this.userN,
                 comments: 0,
<<<<<<< HEAD
                 votes: 0,
                 admin: false
               };

=======
                 votes: 0
               };
>>>>>>> claker
               var key = ref.push(profile);
               key = key.path.pieces_[1];
               ref.child('/' + key).update({key: key}).then(function(profile){
                 console.log(profile);
<<<<<<< HEAD

               });
               this.$router.push('/');
               bus.$emit('signChange', true);
             }).catch(function(error){
               this.emailTaken = true;
               console.log(error.message);
             }.bind(this));
           }});
=======
                 
               });
               this.$router.push('/');
             }).bind(this).catch(function(error){
               console.log(error.message);
             });
>>>>>>> claker
           } else {
             console.log("Passwords do not match");
           }
         },
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
<<<<<<< HEAD
            votes:0,
            admin: false
=======
            votes:0
>>>>>>> claker
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
<<<<<<< HEAD
          this.$router.push('/');
          bus.$emit('signChange', true);
          }.bind(this)).catch(function(error) {
=======
          }).catch(function(error) {
>>>>>>> claker
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        })
<<<<<<< HEAD
      },
=======
      }, 
>>>>>>> claker
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
<<<<<<< HEAD
            votes:0,
            admin: false
=======
            votes:0
>>>>>>> claker
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
<<<<<<< HEAD
          this.$router.push('/');
          bus.$emit('signChange', true);
          }.bind(this)).catch(function(error) {
=======
          }).catch(function(error) {
>>>>>>> claker
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
<<<<<<< HEAD
            votes:0,
            admin: false
=======
            votes:0
>>>>>>> claker
          };
          var key = ref.push(profile);
          key = key.path.pieces_[1];
          ref.child('/' + key).update({key: key}).then(function(profile){
            console.log(profile);
          });
<<<<<<< HEAD
          this.$router.push('/');
          bus.$emit('signChange', true);
          }.bind(this)).catch(function(error) {
=======
          }).catch(function(error) {
>>>>>>> claker
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorMessage);
        });
      }
   }
  }
=======
  <div>
    <h1>This is signup</h1>
  </div>
</template>

<script>

export default {

  data () {
    return {

    }
  }
}

>>>>>>> pritesh
</script>
