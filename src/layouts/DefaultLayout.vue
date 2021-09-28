<template>
  <div id="container">
    <sidebar />
    <div id="main-content" class="overflow-auto">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue"

export default {
  components: {
    Sidebar
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
  //width: 70vw;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  height: 600px;
  background-color: #fff;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 1200px;

  @media only screen and (max-width: 1200px) {
    width: 100vw;
    height: 100vh;
  }

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }

  & #main-content {
    flex-grow: 1;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
