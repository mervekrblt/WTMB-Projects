<script>	
// @ is an alias to /src	
import MeetupCard from '@/components/meetup-card.vue'
//use state properties with mapState
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Meetup',
  components: {
    MeetupCard
  },

  computed: {
    ...mapState(['meetup'])
  },

  methods: {
    ...mapActions(['fetchMeetup']),

  },
    
  created() {
    this.fetchMeetup(this.$route.params.id)
  }
}
</script>

<template lang="pug">
 main
    section
        meetup-card(:meetup="meetup")
    section Attendees:
        p(v-for="attendees in meetup.attendees") {{ attendees.name }} 
</template>

<style  scoped>

</style>
