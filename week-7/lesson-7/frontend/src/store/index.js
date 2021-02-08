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
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },

    SET_MEETUPS(state, data) {
      state.meetups = data
    },

    SET_MEETUP(state, data) {
      state.meetup = data
    },

    SET_PEOPLE(state, data) {
      state.people = data
    },

    SET_PERSON(state, data) {
      state.person = data
    },

    SET_NEWMEETUP(state, data) {
      state.meetups.push(data)
    },

    DELETE_MEETUP(state, data) {
      state.meetups.splice(data, 1)
    },

      ATTEND_MEETUP(state, data) {
       state.people.push(data)
     },
     
    SET_NEWPERSON(state, data) {
      console.log(data)
      state.people.push(data)
    },
  },

  actions: {
    incrementCounter({
      commit,
      state
    }) {
      const newCounter = state.counter + 1
      commit('SET_COUNTER', newCounter)
    },

    async fetchMeetups({
      commit
    }) {
      const result = await axios.get('http://localhost:3000/meetup/all/json')
      commit('SET_MEETUPS', result.data)
    },

    async fetchMeetup({
      commit
    }, id) {
      const result = await axios.get(`http://localhost:3000/meetup/${id}/json`)
      commit('SET_MEETUP', result.data)
    },

    //fetch all people 
    async fetchPeople({
      commit
    }) {
      const result = await axios.get('http://localhost:3000/person/all/json')
      commit('SET_PEOPLE', result.data)
    },

    async fetchPerson({
      commit
    }, id) {
      const result = await axios.get(`http://localhost:3000/person/${id}/json`)
      commit('SET_PERSON', result.data)
    },

    async addMeetup({
      commit
    }, meetup) {
      const result = await axios.post('http://localhost:3000/meetup', meetup)
      commit('SET_NEWMEETUP', result.data)
      //console.log(result.data)
    },

    async deleteMeetup({
      commit
    }, id) {
      const result = await axios.delete(`http://localhost:3000/meetup/${id}`)
      commit('DELETE_MEETUP', result.data)
      //console.log(result.data)
    },

     async attendMeetup({ commit }, id) {

       const result = await axios.post(`http://localhost:3000/person/${id}/meetups`)
       commit('ATTEND_MEETUP', result.data)
       console.log(result.data)
     },

    async addPerson({
      commit
    }, person) {
      const result = await axios.post('http://localhost:3000/person', person)
      commit('SET_NEWPERSON', result.data)
      //console.log(result.data)
    },
  },

  modules: {}
})