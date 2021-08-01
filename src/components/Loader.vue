<template>
  <div class="loader">
    <div class="totalBar"></div>
    <div class="progressBar"></div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style>
.totalBar {
  width: 100%;
  height: 5px;
  position: absolute;
  background-color: rgb(62, 204, 168);
  top: 0;
}
.progressBar {
  width: 0%;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(28, 158, 126);
  animation: moveBar 2s linear infinite;
}

@keyframes moveBar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>