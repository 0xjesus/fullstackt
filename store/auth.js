/* eslint-disable arrow-parens */

// initial state
const state = () => ({
  user: {}
})

// getters
const getters = {
  getUser: (state) => state.user
}

// actions
const actions = {
  setUser ({ commit }, payload) {
    commit('FILL_USER_INFO', payload)
  }
}

// mutations
const mutations = {
  FILL_USER_INFO (state, payload) {
    state.user = payload
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
