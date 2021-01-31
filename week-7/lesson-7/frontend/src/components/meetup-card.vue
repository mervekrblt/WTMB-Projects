
<script>
export default {
  name: 'MeetupCard',
  props: ['meetup'],

  methods: {
    displayPerson(){
      return this.meetup.attendees.map(attendee => attendee.name) 
    }
  },
}
</script>


<template lang="pug">
  article.card
    img(:src="`https://picsum.photos/300/200?random=${meetup._id}`", alt="random image") 
    h2 {{meetup.name}} 
    p  {{meetup.location}}
    p(v-for="person in displayPerson()")  {{person}}
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
}

</style>
