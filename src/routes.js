import home from './components/home.vue';
import accInfo from './components/accountInfo.vue';
import creAt from './components/createAt.vue';
import contact from './components/contacts.vue';
import invite from './components/invite.vue';
import atvue from './components/atvue.vue';
import signin from './components/signin.vue';
import signup from './components/signup.vue';
import favorites from './components/favoriteAts.vue'

export default [
  {path: '/', component: home},
  {path: '/accinfo', component: accInfo},
  {path: '/createat', component: creAt},
  {path: '/contact', component: contact},
  {path: '/invite', component: invite},
  {path: '/atvue', component: atvue},
  { path: '/signin', component: signin },
  { path: '/signup', component: signup },
  {path: '/favoriteats' , component: favorites}
]
