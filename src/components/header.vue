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
                @click="signout(subItem)"
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
<<<<<<< HEAD
        <v-list v-for="item in otherItems" :key="item.title" v-if="item.allow">
=======
        <v-list v-for="item in otherItems" :key="item.title">
>>>>>>> claker
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
import * as firebase from 'firebase'
import {bus} from '../main';

  export default {

    data () {
      return {
        sideNav: false,
        signin: false,
        menuItems: [
          { icon: "account_box", title: "Account",
            itemNS: [
              { icon: "lock_open", title: "Sign In", link: "/signin" },
              { icon: "face", title: "Register", link: "/signup" }
            ],
            itemS: [
              { icon: "account_circle", title: "Account Information", link: "/acc"},
              { icon: "favorite", title: "My @'s", link: "/myats" },
<<<<<<< HEAD
              { icon: "lock", title: "Sign Out", link: "" },
              { icon: "directions", title: "Directions", link: "/direction" }
=======
              { icon: "lock", title: "Sign Out", link: "" }
>>>>>>> claker
            ]
          }
        ],
        otherItems: [
<<<<<<< HEAD
          { icon: "create", title: "Create @", link: "/create", allow: true},
          { icon: "credit_card", title: "Donate", link: "/donate", allow: true  },
          { icon: "get_app", title: "Invite a friend", link: "/invite", allow: true  },
          { icon: "gavel", title: "Report a problem", link: "/report", allow: true  },
          { icon: "stars", title: "Popular @'s", link: "/popular", allow: true },
          { icon: "delete_forever", title: "Delete @'s", link: "/delete", allow: false  },
          { icon: "delete_forever", title: "Manage Users", link: "/aduser", allow: false  }
        ],
        admin: false
=======
          { icon: "create", title: "Create @", link: "/create" },
          { icon: "credit_card", title: "Donate", link: "/donate" },
          { icon: "get_app", title: "Invite a friend", link: "/invite" },
          { icon: "gavel", title: "Report a problem", link: "/report" },
          { icon: "stars", title: "Popular @'s", link: "/popular" },
          { icon: "delete_forever", title: "Delete @'s", link: "/delete" },
          { icon: "delete_forever", title: "Delete Users", link: "/aduser" }
        ]
>>>>>>> claker
      }
    },
    created() {
      bus.$on('signChange', (data) => {
        this.signin = data;
<<<<<<< HEAD
      });
      bus.$on('isAdmin', (data) => {
        this.otherItems[5].allow = data;
        this.otherItems[6].allow = data;
=======
>>>>>>> claker
      })
    },
    methods: {
      signout(item) {
        if(item.title === "Sign Out"){
          firebase.auth().signOut();
          this.signin = false;
          this.sideNav = false;
<<<<<<< HEAD
          this.otherItems[5].allow = false;
          this.otherItems[6].allow = false;
=======
>>>>>>> claker
          this.$router.push("/");
        }
      }
    }
<<<<<<< HEAD

=======
>>>>>>> claker
  }

</script>

<style scoped>

#title{
  cursor: pointer;
}


</style>
