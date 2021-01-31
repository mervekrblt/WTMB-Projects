
<script>
export default {
  name: 'MeetupCard',
  props: ['meetup'],

  computed: {
    meetupUrl() {
      return `/meetup/${this.meetup._id}`
    }
  }
}
</script>


<template lang="pug">
  article.card
    img(:src="`https://picsum.photos/300/200?random=${meetup._id}`", alt="random image") 
    h2 
      router-link(:to="meetupUrl") {{meetup.name}} 
    p  Location: {{meetup.location}}
    p  {{meetup.attendees.length}} attendees
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
