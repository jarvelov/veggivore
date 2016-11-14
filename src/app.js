import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import router from './router'
import store from './store'

sync(store, router) // keep vuex and vue-router up to sync

import App from './components/App'

const app = new Vue({
  router,
  store,
  ...App
})

export { app }
