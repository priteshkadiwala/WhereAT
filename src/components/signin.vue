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
<<<<<<< HEAD
                      label="Mail"
                      v-model="email"
                      type="email"
                      ></v-text-field>
                      <v-alert v-if="emailNF" color="error" icon="warning" value="true">
                        Please register first!
                      </v-alert>
=======
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
>>>>>>> claker
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
<<<<<<< HEAD
                      label="Password"
                      v-model="password"
                      type="password"
                      ></v-text-field>
                    <br />
                    <p id="fp" @click="forgot">
                      Forgot password?
                    </p>
                  </v-flex>

                </v-layout>
                <v-layout row>

                    <v-flex xs12>
                      <div class="text-xs-center">
                        <v-btn type="submit">Sign in</v-btn>
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



=======
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
>>>>>>> claker
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
<<<<<<< HEAD

=======
>>>>>>> claker
</template>


<script>
import * as firebase from 'firebase'
import {bus} from '../main'

  export default {
    data () {
      return {
        email: '',
        password: '',
<<<<<<< HEAD
        emailNF: false
=======
>>>>>>> claker

      }
    },
    methods: {
      submit() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(user){
               this.$router.push('/');
               bus.$emit('signChange', true);
<<<<<<< HEAD
               var email = firebase.auth().currentUser.email;
               var ref = firebase.database().ref('/profiles');
               ref.once('value').then((snap)=>{
                 snap.forEach((prof)=>{
                   if (prof.val().email == email) {
                     bus.$emit('isAdmin', prof.val().admin);
                   }
                 });
               })

            }.bind(this)).catch(function(error){
              this.emailNF = true;
              console.log("caught error: " + error);
            }.bind(this));
=======
            }.bind(this)).catch(function(error){
              console.log("caught error: " + error);
            });
>>>>>>> claker
      },
      google() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
<<<<<<< HEAD
          this.$router.push('/');
          bus.$emit('signChange', true);
          console.log(user);
          }.bind(this)).catch(function(error) {
=======
          console.log(user);
          }).catch(function(error) {
>>>>>>> claker
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
      },
      facebook() {
<<<<<<< HEAD
        console.log("heello");
=======
>>>>>>> claker
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(firebase.auth().currentUser);
<<<<<<< HEAD
          this.$router.push('/');
          bus.$emit('signChange', true);
          console.log(user);
        }.bind(this)).catch(function(error) {
=======
          console.log(user);
          }).catch(function(error) {
>>>>>>> claker
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
<<<<<<< HEAD
          this.$router.push('/');
          bus.$emit('signChange', true);
          console.log(user);
          }.bind(this)).catch(function(error) {
=======
          console.log(user);
          }).catch(function(error) {
>>>>>>> claker
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
      },
      forgot() {
<<<<<<< HEAD
        console.log(this.email);
=======
>>>>>>> claker
        firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
          console.log("Sent");
        }).catch((error)=> {
          console.log(error.errorMessage);
        });
      }
    }

  }
</script>
<<<<<<< HEAD

<style scoped>

#fp {
  text-decoration: underline;
  text-decoration-color: blue;
  color: blue;
}

#fp:hover {
  cursor: pointer;
}

</style>
=======
>>>>>>> claker
=======
  <div>
    <h1>This is signin</h1>
  </div>
</template>

<script>

export default {

  data () {
    return {

    }
  }
}

</script>
>>>>>>> pritesh
