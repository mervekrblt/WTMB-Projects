
<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { mapActions} from 'vuex'

export default {
  data () {
    return {
      myIcon: faTrash,
      show: false,
    }
  },

  name: 'PersonCard',

  props: ['person'],

  components: {
    FontAwesomeIcon
  },

  methods: {
    ...mapActions(["deletePerson", "attendMeetup"]),

    delPerson() {
      const answer = confirm(`Do you want to delete ${this.person.name}`)
      if(answer){
        this.deletePerson(this.person._id)
        location.reload()
        //location reload refresh the current page
      }
    },

    showInput() {
      this.show = !this.show
      console.log(this.show)
    },

    attend() {
      //console.log(this.person._id)
      //console.log(this.$refs.meetupId.value)
      let ids = {
        personId: this.person._id,
        meetup: this.$refs.meetupId.value
      }

      if(!ids.meetup){
        //console.log("meetup id yok")
        alert("Meetup id is required")
      }

      //attendMeetup is came from store
      this.attendMeetup(ids)
      this.$refs.meetupId.value =''
    },
  },

  computed: {
    personUrl() {
      return `/person/${this.person._id}`
    },

  }
}
</script>


<template lang="pug">
section.cards
  article.card
    section
      button.deleteButton(@click="delPerson")
        font-awesome-icon(:icon="myIcon")
    img(:src="`https://picsum.photos/300/200?random=${person._id}`", alt="random image") 
    h2 
      router-link(:to="personUrl") {{person.name}}
    p  Age: {{person.age}}
    button.attendButton(@click="showInput") Attend a Meetup
    section.show(v-if="show")
      input(ref="meetupId" placeholder="Meetup's id") 
      button(@click="attend") Attend
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

.cards{
  display: inline-flex;
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

.attendButton {
  background: rgb(135, 222, 161);
  border-radius: 2vh;
  padding: 2vh;
  outline: none;
  margin-bottom: 2vh;
}

.show {
  display: flex;
  justify-content: space-between;
}

</style>