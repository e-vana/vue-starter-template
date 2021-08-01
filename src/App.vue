<template>
  <div id="app">
    <Loader v-if="$store.getters.getLoading"></Loader>
    <router-view/>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'

export default {
  components: {
    Loader
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0px;
}
a {
  color: rgb(28, 158, 126);
  font-weight: bold;
}
</style>
