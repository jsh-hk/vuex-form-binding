import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({

  strict: true,

  state: {
    colors: [],
    users: [],
    activeUser: {}
  },

  mutations: {
    SET_COLORS (state, payload) {
      state.colors = payload
    },

    SET_USERS (state, payload) {
      state.users = payload
    },

    SET_ACTIVE_USER (state, payload) {
      state.activeUser = payload
    }
  },

  actions: {
    GET_COLORS (context) {
      return Api.getColors()
        .then(colors => {
          context.commit('SET_COLORS', colors)
        })
        .catch(error => console.log(error))
    },

    GET_USERS (context) {
      return Api.getUsers()
        .then(users => {
          context.commit('SET_USERS', users)
        })
        .catch(error => console.log(error))
    },

    GET_ACTIVE_USER (context, id) {
      return Api.getUser(id)
        .then(user => {
          context.commit('SET_ACTIVE_USER', user)
        })
        .catch(error => console.log(error))
    }
  }
})
