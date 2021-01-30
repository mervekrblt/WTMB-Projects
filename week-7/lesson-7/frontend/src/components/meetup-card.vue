
<script>
export default {
  name: 'MeetupCard',
  props: ['meetup']
}
</script>


<template lang="pug">
div.name {{meetup.name}} {{meetup.location}}
</template>

<style scoped>

.name{
  color: rgb(25, 131, 223);
}

</style>
