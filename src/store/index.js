import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

if (module.hot) {
  // accept actions, mutations and store as hot modules
  module.hot.accept(['./actions', './mutations', './state'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newActions = require('./actions').default
    const newMutations = require('./mutations').default
    const newState = require('./state').default

    // swap in the new
    store.hotUpdate({
      actions: newActions,
      mutations: newMutations,
      state: newState
    })
  })
}

export default store
