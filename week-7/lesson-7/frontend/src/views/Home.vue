<script>	
// @ is an alias to /src	
import MeetupCard from '@/components/meetup-card.vue'
//use state properties with mapState
import { mapState, mapActions } from 'vuex'

export default {	
  name: 'Home',	

  components: {	
    MeetupCard	
  },
  
  computed: {
    ...mapState(['meetups', 'counter'])
  },

  methods: {
    ...mapActions(['fetchMeetups', 'incrementCounter'])
  },

  created() {
    this.fetchMeetups()
  }
}	
</script>

<template lang="pug">
main
  h1 Hello world
  button(@click="incrementCounter") Increment
  div {{ counter }}
  //div {{ meetups }}

  meetup-card(v-for="meetup in meetups", :meetup="meetup") 
</template>
