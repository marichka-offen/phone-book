<template>
  <div id="container">
    <sidebar />
    <div id="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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
  },
  data() {
    return {
      animationName: undefined
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length
      const fromDepth = from.path.split("/").length
      this.animationName = toDepth < fromDepth ? "slide-right" : "slide-left"
    }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
