

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

      submit() {
        if(this.name === '' || this.location === ''){
          alert('name and location are required')
          this.name = '',
          this.location = ''
        } 

        let newMeetup = {
          name: this.name,
          location: this.location 
        }

        this.addMeetup(newMeetup),
        this.name = '',
        this.location = ''
    }
  }
  
}
</script>


<template lang="pug">
  section
   input(v-model="name", placeholder="Meetup Name")
   input(v-model="location", placeholder="Location")
   button(@click="submit" ) Create New Meetup
</template>

<style scoped>

input {
    height: 5vh;
    border-radius: 10px;
    border-block-color: #42b983;
    margin-right: 10vh;
    outline: none;
}

button {
    height: 5vh;
    border-radius: 10px;
    border-block-color: #42b983;
    margin-right: 10vh;
    outline: none;
}

</style>
