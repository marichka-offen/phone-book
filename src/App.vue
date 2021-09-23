<template>
  <div id="app" class="d-flex justify-content-center align-items-center">
    <default-layout />
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue"

export default {
  components: { DefaultLayout }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
}
</style>
