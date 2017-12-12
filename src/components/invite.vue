<template>
  <div>
    <v-layout class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
        <v-card v-if="form">
          <v-toolbar dark color="blue">
            <div class="text-xs-center">
              <v-toolbar-title class="white--text">Invite a Friend</v-toolbar-title>
              </div>
          </v-toolbar>
        <v-form class="ma-3 pa-3">
          <v-text-field
            label="E-mail"
            v-model="invite.email"
            required
          ></v-text-field>
          <v-alert color="error" icon="warning" value="true" v-if="error">
            Please enter the E-mail of your friend
          </v-alert>
          <div class="text-xs-center">
            <v-btn @click="submit">
              submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
          </div>
        </v-form>
      </v-card>
      <v-card v-if="!form">
          <v-toolbar dark color="blue">
            <div class="text-xs-center">
              <v-toolbar-title class="white--text">Thank you for inviting you Friend</v-toolbar-title>
              </div>
          </v-toolbar>
        <v-form class="ma-3 pa-3">

          <div class="text-xs-center">
            <h4>An email has been sent to your friend. Please inform them to check their email and follow the link!</h4>
          </div>
        </v-form>
      </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import * as firebase from 'firebase'
export default {

  data () {
    return {
      invite: {
        email: ''
      },
      form: true,
      error: false
    }
  },
  methods: {
  	submit() {
      if(this.invite.email === ""){
        this.error = true
      } else {
        var ref = firebase.database().ref('/invites');
    		var key = ref.push(this.invite);
    		key = key.path.pieces_[1];
    		ref.child('/' + key).update({key: key});

        emailjs.send("gmail","template_LOOWuveW",{email: this.invite.email});
        this.form = false;
      }

  	},
    clear() {
      this.invite.email = "";
      this.error = false
    }
  }
}

</script>
