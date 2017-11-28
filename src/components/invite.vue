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
//import * as nodemailer from 'nodemailer'
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
      /*let transporter = nodemailer.createTransporter({
          service: 'gmail',
          secure: 'false',
          port: 25,
          auth: {
            user: 'whereatemail@gmail.com',
            pass: 'whereat111'
          },
          tls: {
            rejectUnauthorized: false
          }
        });
      let HelperOptions = {
        from: '"Where at" <whereatemail@gmail.com',
        to: 'kleaf.gbit@gmail.com',
        subject: "hello",
        text: "hey howdy"
      };
      transporter.sendMail(HelperOptions, (error, info) => {
        if(error) {
            console.log(error);
        }
      });*/

  		var ref = firebase.database().ref('/invites');
  		var key = ref.push(this.invite);
  		key = key.path.pieces_[1];
  		ref.child('/' + key).update({key: key});
  	}
  }
}

</script>
