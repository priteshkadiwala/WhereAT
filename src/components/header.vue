<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="ma-1">account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="ma-0">
            Account
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="indigo">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Where@</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu open-on-hover offset-y>
          <v-btn flat slot="activator">
            <v-icon left class="ma-1">account_box</v-icon>
            Account
          </v-btn>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-title>Sign in</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-title>Register</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
  export default {

    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'account_box', title: 'Account' },

        ]
      }
    }
  }

</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
