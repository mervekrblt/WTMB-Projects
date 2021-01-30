<script>	
// @ is an alias to /src	
import HelloWorld from '@/components/HelloWorld.vue'
//use state properties with mapState
import { mapState, mapActions } from 'vuex'

export default {	
  name: 'Home',	

  components: {	
    HelloWorld	
  },
  
  computed: {
    ...mapState(['meetups'])
  },

  methods: {
    ...mapActions(['fetchMeetups'])
  },

  created() {
    this.fetchMeetups()
  }
}	
</script>

<template lang="pug">
main
  h1 Hello world
  
  div {{ meetups }}
</template>
