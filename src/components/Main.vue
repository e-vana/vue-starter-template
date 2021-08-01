<template>
  <div class="main">
    <h1>This is the main component.</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus in est hic, consequatur minima magnam vero repellendus dolor. Assumenda sed sint laborum asperiores architecto ipsam possimus qui officiis eveniet, amet hic illum quo minus magni adipisci itaque quia minima modi?</p>
    <button @click="setLoading">Toggle Vuex Loading</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods: {
    setLoading: function(){
      this.$store.dispatch("setLoading");
    }
  },
  computed: {
    loadingState: function(){
      if(this.$store.getters.getLoading){
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style>
.main {
  padding: 0px 30%;
}
button {
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 20px;
  background-color: rgb(28, 158, 126);
  color: white;
  font-size: 16px;
  transition: all .1s ease-in;
}
button:hover {
  background-color: rgb(55, 197, 162);
}

</style>