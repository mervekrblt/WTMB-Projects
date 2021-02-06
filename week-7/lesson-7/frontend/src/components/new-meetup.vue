

<script>
import { mapActions} from 'vuex'

export default {
  name: 'NewMeetup',

  data(){
      return {
        name: '',
        location: '',
      }
  },


  methods: {
      ...mapActions(["addMeetup"]),

      Submit() {
        let newMeetup = {
            name: this.name,
            location: this.location
        }
        
        console.log(newMeetup)
        this.addMeetup(newMeetup)
        this.name = ''
        this.location = '' 
    }
  }
  
}
</script>


<template lang="pug">
  section
   input(v-model="name", placeholder="Meetup Name")
   input(v-model="location", placeholder="Location")
   button(@click="Submit" ) Create New Meetup
</template>

<style scoped>

input {
    height: 5vh;
    border-radius: 10px;
    border-block-color: #42b983;
    margin-right: 10vh;
}

button {
    height: 5vh;
    border-radius: 10px;
    border-block-color: #42b983;
    margin-right: 10vh;
}

</style>
