<script>
export default {
    name: "Footer"
}
</script>

<template lang="pug">
  section.footer
    h1
      a(href="https://github.com/mervekrblt") Made by Merve Karabulut
</template>


<style>
body{
  margin: 0;
}

.footer{
  background-color:  #42b983;
  position: initial;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10vh;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>