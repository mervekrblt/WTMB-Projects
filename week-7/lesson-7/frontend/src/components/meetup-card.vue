
<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { mapActions} from 'vuex'

export default {
  data () {
    return {
      myIcon: faTrash
    }
  },

  name: 'MeetupCard',
  props: ['meetup'],

  computed: {
    meetupUrl() {
      return `/meetup/${this.meetup._id}`
    }
  },

  components: {
    FontAwesomeIcon
  },

  methods: {
    ...mapActions(["deleteMeetup"]),

    delMeetup() {
      //console.log((this.meetup._id))
      const answer = confirm(`Do you want to delete ${this.meetup.name} meetup`)
      if(answer){
        this.deleteMeetup(this.meetup._id)
        location.reload()
      }
      //console.log(this.deleteMeetup(this.meetup._id)) 
    },

      
  }
}
</script>


<template lang="pug">

  article.card
    section
      button.deleteButton(@click="delMeetup")
        font-awesome-icon(:icon="myIcon")
    img(:src="`https://picsum.photos/300/200?random=${meetup._id}`", alt="random image") 
    h2 
      router-link(:to="meetupUrl") {{meetup.name}} 
    p  Location: {{meetup.location}}
    p  {{meetup.attendees.length}} attendees
    p  ID: {{ meetup._id }}
</template>

<style scoped>
.card{
  color: rgb(25, 131, 223);
  display: inline-block;
  margin: 20px;
  text-align: left;
  border: black 3px solid;
  padding: 20px;
  min-width: 30vh;
  border-radius: 20px;
}

.deleteButton {
  float: right;
  margin-bottom: 10%;
  width: 20%;
  border-radius: 10px;
  outline: none;
  background-color: #42b983;
  height: 30px;
}

</style>
