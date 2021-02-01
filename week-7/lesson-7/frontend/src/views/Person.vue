<script>	
// @ is an alias to /src	
import PersonCard from '@/components/person-card.vue'
//use state properties with mapState
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Person',
  components: {
    PersonCard
  },

  computed: {
    ...mapState(['person'])
  },

  methods: {
    ...mapActions(['fetchPerson']),

  },
    
  created() {
    this.fetchPerson(this.$route.params.id)
  },
  
}
</script>

<template lang="pug">
 main
    section
        person-card(:person="person")
    section Meetups:
        p(v-for="meetups in person.meetups") {{ meetups.name }}
</template>

<style  scoped>

</style>
