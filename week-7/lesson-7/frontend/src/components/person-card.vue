
<script>

import { mapActions} from 'vuex'

export default {
  name: 'PersonCard',

  props: ['person'],

  methods: {
    ...mapActions(['attendMeetup'])
  },

  computed: {
    personUrl() {
      return `/person/${this.person._id}`
    },

    meetupUrl() {
      return `/`
    }
  }
}
</script>


<template lang="pug">
  article.card
    img(:src="`https://picsum.photos/300/200?random=${person._id}`", alt="random image") 
    h2 
      router-link(:to="personUrl") {{person.name}}
    p  Age: {{person.age}}
    button
      router-link(:to="meetupUrl") Attend a Meetup
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

</style>