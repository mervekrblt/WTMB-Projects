<script>	
// @ is an alias to /src	
import PersonCard from '@/components/person-card.vue'
import NewPerson from '@/components/new-person.vue'
//use state properties with mapState
import { mapState, mapActions } from 'vuex'

export default {	
  name: 'People',	

  components: {	
    	PersonCard,
      NewPerson
  },
  
  computed: {
    ...mapState(['people'])
  },

  methods: {
    ...mapActions(['fetchPeople'])
  },

  created() {
    this.fetchPeople()
  }
}	
</script>

<template lang="pug">
main
    section
      new-person
    section
      person-card(v-for="person in people", :person="person")

  
</template>

<style scoped>
  section{
    padding: 40px 0px;
  }

</style>