<script>	
// @ is an alias to /src	
import MeetupCard from '@/components/meetup-card.vue'
import NewMeetup from '@/components/new-meetup.vue'
//use state properties with mapState
import { mapState, mapActions } from 'vuex'

export default {	
  name: 'Home',	

  components: {	
    MeetupCard,
    NewMeetup	
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
  
  section
    new-meetup
    meetup-card(v-for="meetup in meetups", :meetup="meetup")
  //- section
  //-   button.increment-button(@click="incrementCounter") Increment
  //-   div {{ counter }}
  
</template>


<style scoped>
  section{
    padding: 40px 0px;
  }

  .increment-button{
    color:rgb(0, 0, 0);
    padding: 20px 30px;
    border-radius: 10%;
    background: coral;
  }

  .increment-button:hover{
    background-color: cornflowerblue;
  }
</style>