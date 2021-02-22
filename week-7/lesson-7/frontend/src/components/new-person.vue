
<script>
import { mapActions} from 'vuex'

export default {
  name: 'NewPerson',

  data(){
      return {
        name: '',
        age: '',
      }
  },


  methods: {
      ...mapActions(["addPerson"]),

      submit() {
        if(this.name === '' || this.age === ''){
          alert('name and age are required')
          this.name = '',
          this.age = ''
        } 

        let newPerson = {
          name: this.name,
          age: this.age 
        }

        this.addPerson(newPerson),
        this.name = '',
        this.age = ''
    }
  }
  
}
</script>


<template lang="pug">
  section
   input(v-model="name", placeholder="Person Name")
   input(v-model="age", placeholder="Age")
   button(@click="submit" ) Create New Person
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