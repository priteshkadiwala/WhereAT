<template>
  <div>
    <v-layout class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
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
          <div class="text-xs-center">
            <v-btn @click="submit">
              submit
            </v-btn>
            <v-btn>clear</v-btn>
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
      }
    }
  },
  methods: {
  	submit() {
  		var ref = firebase.database().ref('/invites');
  		var key = ref.push(this.invite);
  		key = key.path.pieces_[1];
  		ref.child('/' + key).update({key: key});
  	}
  }
}

</script>
