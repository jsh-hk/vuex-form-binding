import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({

  strict: true,

  state: {
    users: []
  },

  mutations: {
    SET_USERS (state, payload) {
      state.users = payload
    }
  },

  actions: {
    GET_USERS (context) {
      return Api.getUsers()
        .then(users => {
          context.commit('SET_USERS', users)
        })
        .catch(error => console.log(error))
    }
  }
})
