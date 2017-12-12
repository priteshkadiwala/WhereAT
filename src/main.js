
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import Routes from './router/index'

<<<<<<< HEAD
<<<<<<< HEAD
import * as firebase from 'firebase'

=======
>>>>>>> pritesh
=======
import * as firebase from 'firebase'
//import * as admin from 'firebase-admin'
var serviceAccount = require("./whereat-e16ee-firebase-adminsdk-xx9ks-01017324cc.json");

>>>>>>> frontend
Vue.use(Vuetify)
Vue.use(VueRouter);

Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

<<<<<<< HEAD
<<<<<<< HEAD
export const bus = new Vue();

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  created () {
  	firebase.initializeApp({
    	apiKey: 'AIzaSyC2qWVGuqmzGPZkH42B4TJDRuOjOe9eH80',
    	authDomain: 'whereat-e16ee.firebaseapp.com',
    	databaseURL: 'https://whereat-e16ee.firebaseio.com',
    	projectId: 'whereat-e16ee',
    	storageBucket: 'whereat-e16ee.appspot.com',
  		})
	}
=======
new Vue({
  el: '#app',
  router,
  render: h => h(App)
>>>>>>> pritesh
=======
export const bus = new Vue();

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  created () {
  	firebase.initializeApp({
    	apiKey: 'AIzaSyC2qWVGuqmzGPZkH42B4TJDRuOjOe9eH80',
    	authDomain: 'whereat-e16ee.firebaseapp.com',
    	databaseURL: 'https://whereat-e16ee.firebaseio.com',
    	projectId: 'whereat-e16ee',
    	storageBucket: 'whereat-e16ee.appspot.com',
  		});
  	/*admin.initializeApp({
  		credential: admin.credential.cert(serviceAccount),
  		databaseURL: "https://whereat-e16ee.firebaseio.com"
  	})*/
	}
>>>>>>> frontend
})
