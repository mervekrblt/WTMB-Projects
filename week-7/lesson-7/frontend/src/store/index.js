import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    meetups: [],
    meetup: {},
    people: [],
    person: {}
  },

  mutations: {
    SET_COUNTER(state, newCount){
      state.counter = newCount
    },
    SET_MEETUPS(state, data){
      state.meetups = data
    },
    SET_MEETUP(state, data){
      state.meetup = data
    },
    SET_PEOPLE(state, data){
      state.people = data
    },
    SET_PERSON(state, data){
      state.person = data
    },
  },

  actions: {
    incrementCounter({commit, state}){
      const newCounter = state.counter + 1
      commit('SET_COUNTER', newCounter)
    },

    async fetchMeetups({ commit }){
      const result = await axios.get('http://localhost:3000/meetup/all/json')
      commit('SET_MEETUPS', result.data)
    },

    async fetchMeetup({ commit }, id){
      const result = await axios.get(`http://localhost:3000/meetup/${id}/json`)
      commit('SET_MEETUP', result.data)
    },

    //fetch all people 
    async fetchPeople({ commit }){
      const result = await axios.get('http://localhost:3000/person/all/json')
      commit('SET_PEOPLE', result.data)
    },

    async fetchPerson({ commit }, id){
      const result = await axios.get(`http://localhost:3000/person/${id}/json`)
      commit('SET_PERSON', result.data)
    },
  },

  modules: {
  }
})
