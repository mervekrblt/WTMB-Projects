import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    meetups: []
  },

  mutations: {
    SET_COUNTER(state, newCount){
      state.counter = newCount
    },
    SET_MEETUPS(state, data){
      state.meetups = data
    }
  },

  actions: {
    incrementCounter({commit, state}){
      const newCounter = state.counter + 1
      commit('SET_COUNTER', newCounter)
    },

    async fetchMeetups({ commit }){
      const result = await axios.get('http://localhost:3000/meetup/all/json')
      commit('SET_MEETUPS', result.data)
    }
  },

  modules: {
  }
})
