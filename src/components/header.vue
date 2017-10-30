<template>
  <div>
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
              <v-list-tile
                v-for="subItem in item.itemNS"
                v-bind:key="subItem.title"
                @click=""
                router-link
                :to="subItem.link"
              >
                <v-list-tile-action>
                  <v-icon>{{subItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>
            <div v-if="signin">
              <v-list-tile
                v-for="subItem in item.itemS"
                v-bind:key="subItem.title"
                @click=""
                router-link
                :to="subItem.link"
                >
                  <v-list-tile-action>
                    <v-icon>{{subItem.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </div>
          </v-list-group>
        </v-list>
        <v-list v-for="item in otherItems" :key="item.title">
            <v-list-tile
              @click=""
              router-link
              :to="item.link"
              >
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{item.title}}
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="indigo">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
      <router-link to="/" tag="span" id="title">Where@</router-link>
      </v-toolbar-title>
    </v-toolbar>
  </div>
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
              { icon: "lock_open", title: "Sign In", link: "/signin" },
              { icon: "face", title: "Register", link: "/signup" }
            ],
            itemS: [
              { icon: "account_circle", title: "Account Information", link: "/acc" },
              { icon: "favorite", title: "My @'s", link: "/myats" },
              { icon: "lock", title: "Sign Out", link: "/" }
            ]
          }
        ],
        otherItems: [
          { icon: "create", title: "Create @", link: "/create" },
          { icon: "credit_card", title: "Donate", link: "/donate" },
          { icon: "get_app", title: "Invite a friend", link: "/invite" },
          { icon: "gavel", title: "Report a friend", link: "/report" }
        ]
      }
    }
  }

</script>

<style scoped>

#title{
  cursor: pointer;
}


</style>
