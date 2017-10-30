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
        <v-form v-model="valid" class="ma-3 pa-3">
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <div class="text-xs-center">
            <v-btn>
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

export default {

  data () {
    return {

    }
  }
}

</script>
