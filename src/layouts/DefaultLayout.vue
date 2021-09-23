<template>
  <div id="container">
    <sidebar />
    <div id="main-content">
      <router-view />
    </div>
    <contact-details />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue"
//import MainContentLayout from "@/layouts/MainContentLayout.vue"
import ContactDetails from "@/components/ContactDetails.vue"

export default {
  components: {
    Sidebar,
    ContactDetails
    //MainContentLayout
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 70vw;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  height: 600px;
  background-color: #fff;
  display: flex;

  & #main-content {
    flex-grow: 1;
  }
}
</style>
