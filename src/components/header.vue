<template>
  <div>
    <div style="cursor: pointer;" class="boxWhereAt" id="WhereAt"><router-link to="/">Where@</router-link></div>

    <div style="cursor: pointer;" class="boxWhereAt">
      <dropdown :visible="visAccount" @clickout="visAccount = false">
        <span @click="visAccount = !visAccount" class="click-here">Account</span>
        <div class="dialog" slot="dropdown">
          <ul id="AccountList">
            <li><router-link to="/accinfo">Account Information</router-link></li>
            <li><a href="">My @'s</a></li>
            <li><a href="">My favorite @'s</a></li>
            <li v-if="!user.authenticated"><router-link to="/signin" exact>Sign In</router-link></li>
            <li v-if="!user.authenticated"><router-link to="/signup" exact>Sign Up</router-link></li>
            <li v-if="user.authenticated"><router-link to="/" v-on:click.native="logout()" >Logout</router-link></li>
          </ul>
        </div>
      </dropdown>
    </div>

    <div style="cursor: pointer;" class="boxWhereAt" id="createat"><router-link to="/createat">Create@</router-link></div>

    <div style="cursor: pointer;" class="boxWhereAt">
      <dropdown :visible="visDonation" @clickout="visDonation = false">
        <span @click="visDonation = !visDonation" class="click-here">Donation</span>
        <div class="dialog" slot="dropdown">dialog</div>
      </dropdown>
    </div>

    <div class="boxWhereAt">
       <div class="search">
          <!-- span class="icon"><i class="fa fa-search"></i></span> \ -->
          <input type="text" class="searchTerm" placeholder="Search location ...">
       </div>
    </div>
</div>
</template>


<script>

import dropdown from './vueDropDown.vue'
import auth from '../auth/index'

export default{
  components:{
    'dropdown': dropdown
  },
  data() {
    return {
      visAccount:   false,
      visCreate:    false,
      visDonation:  false,
      user: auth.user
    };
  },
  methods: {
    logout() {
      console.log('delete');
      auth.logout()
    }
  }
}
</script>


<style scoped>
.boxWhereAt{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
    display: inline-block;
}


a{
  color: #fff;
  text-decoration: none;


}

.click-here {
  display: inline-block;
  padding: 3px;
  cursor: pointer;
  box-sizing: border-box;
}

.dialog{
  background:  #679fc2;
  position: relative;
  left: -70px;
  top: inherit;
}

#AccountList li{
  list-style-type: none;
  text-align: left;
  margin:0 0 10px 0;
}

#AccountList li a{
  color: #343434;
  text-decoration: none;
  list-style-type: none;
  text-align: left;
  margin:0 0 10px 0;
}

#AccountList li a:hover{
text-decoration: underline;
}
</style>
