<template>
  <div>
<<<<<<< HEAD
<<<<<<< HEAD
    <v-layout class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
<<<<<<< HEAD
        <v-card v-if="form">
=======
        <v-card>
>>>>>>> claker
=======
    <v-layout class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
>>>>>>> frontend
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
<<<<<<< HEAD
<<<<<<< HEAD
          <v-alert color="error" icon="warning" value="true" v-if="error">
            Please enter the E-mail of your friend
          </v-alert>
=======
>>>>>>> claker
=======
>>>>>>> frontend
          <div class="text-xs-center">
            <v-btn @click="submit">
              submit
            </v-btn>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
            <v-btn>clear</v-btn>
>>>>>>> claker
=======
            <v-btn>clear</v-btn>
>>>>>>> frontend
          </div>
        </v-form>
      </v-card>
      </v-flex>
    </v-layout>
<<<<<<< HEAD
=======
    <h1>This is invite</h1>
>>>>>>> pritesh
=======
>>>>>>> frontend
  </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
import * as firebase from 'firebase'
=======

>>>>>>> pritesh
=======
import * as firebase from 'firebase'
//import * as nodemailer from 'nodemailer'
>>>>>>> frontend
export default {

  data () {
    return {
<<<<<<< HEAD
<<<<<<< HEAD
      invite: {
        email: ''
<<<<<<< HEAD
      },
      form: true,
      error: false
=======
      }
>>>>>>> claker
    }
  },
  methods: {
  	submit() {
<<<<<<< HEAD
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
=======
  		var ref = firebase.database().ref('/invites');
  		var key = ref.push(this.invite);
  		key = key.path.pieces_[1];
  		ref.child('/' + key).update({key: key});
  	}
>>>>>>> claker
=======

    }
>>>>>>> pritesh
=======
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
>>>>>>> frontend
  }
}

</script>
