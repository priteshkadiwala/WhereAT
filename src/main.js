
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import Routes from './router/index'

Vue.use(Vuetify)
Vue.use(VueRouter);

Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
