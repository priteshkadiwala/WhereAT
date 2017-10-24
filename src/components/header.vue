<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
          <v-list-group v-for="item in menuItems" :value="item.active" v-bind:key="item.title">
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <div v-if="!signin">
              <v-list-tile v-for="subItem in item.itemNS" v-bind:key="subItem.title" @click="">
                <v-list-tile-action>
                  <v-icon>{{ subItem.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>
            <div v-if="signin">
              <v-list-tile v-for="subItem in item.itemS" v-bind:key="subItem.title" @click="">
                <v-list-tile-action>
                  <v-icon>{{ subItem.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>
          </v-list-group>
        </v-list>
        <v-list v-for="item in otherItems" v-bind:key="item.title">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon class="ma-1">{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="ma-0">
              {{item.title}}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

    </v-navigation-drawer>
    <v-toolbar dark class="indigo">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Where@</v-toolbar-title>
    </v-toolbar>
  </v-app>
</template>

<script>
  export default {

    data () {
      return {
        sideNav: false,
        signin: true,
        menuItems: [
          { icon: "account_box", title: "Account",
            itemNS: [
              { icon: "lock_open", title: "Sign In" },
              { icon: "face", title: "Register" }
            ],
            itemS: [
              { icon: "account_circle", title: "Account Information" },
              { icon: "favorite", title: "My @'s'" },
              { icon: "lock", title: "Sign Out" }
            ]
          }
        ],
        otherItems: [
          { icon: "create", title: "Create @" },
          { icon: "credit_card", title: "Donate" },
          { icon: "get_app", title: "Invite a friend" }
        ]
      }
    }
  }

</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
