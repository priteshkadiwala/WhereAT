<template>
  <div>
    <v-layout class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar dark color="red">
            <div class="text-xs-center">
              <v-toolbar-title class="white--text">Report a problem</v-toolbar-title>
              </div>
          </v-toolbar>
        <v-form class="ma-3 pa-3">
          <v-text-field
            label="Name"
            v-model="report.name"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="report.email"
            required
          ></v-text-field>
          <v-text-field
            name="input-7-1"
            label="Describe the issue"
            v-model="report.issue"
            multi-line
            required
          ></v-text-field>
          <div class="text-xs-center">
            <v-btn v-on:click="submit">
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
        report: {
          name: '',
          email: '',
          issue: ''
        }
      }
    },
    methods: {
      submit() {
        var ref = firebase.database().ref('/reports');
        var key = ref.push(this.report);
        key = key.path.pieces_[1];
        ref.child('/' + key).update({key: key});
      }
    }
  }

</script>

<style scoped>


</style>
