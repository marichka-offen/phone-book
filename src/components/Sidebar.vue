<template>
  <div id="left-drawer">
    <div class="d-flex justify-content-center">
      <button class="add-user-btn" @click="openModal = true">
        <i class="fas fa-user-plus"></i>
      </button>
      <modal v-if="openModal" @close="openModal = false">
        <p slot="header">Add New Contact</p>
        <add-contact-form slot="body" @close="openModal = false" />
      </modal>
    </div>
    <hr class="divider" />
    <div class="nav-links">
      <router-link to="/"
        ><i class="fas fa-globe-europe"></i
        ><span>All Contacts</span></router-link
      >
      <router-link to="/family"
        ><i class="fas fa-home"></i><span>Family</span></router-link
      >
      <router-link to="/friends">
        <i class="fas fa-users"></i><span>Friends</span></router-link
      >
      <router-link to="/work">
        <i class="fas fa-briefcase"></i><span>Work</span></router-link
      >
      <router-link to="/other">
        <i class="fas fa-address-book"></i><span>Other</span></router-link
      >
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal"
import AddContactForm from "@/components/AddContactForm.vue"

export default {
  data() {
    return {
      openModal: false
    }
  },
  components: {
    Modal,
    AddContactForm
  }
}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light: #faf9f9;
$primary-color: #00bf72;
$primary-dark: #008793;

#left-drawer {
  width: 220px;
  height: 100%;
  background-color: #051937;

  @media only screen and (max-width: 850px) {
    width: 100%;
    height: max-content;
  }

  & .add-user-btn {
    color: $color-grey-light;
    border: 2px solid $color-grey-light;
    font-size: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 15px auto;
    transition: all 0.25s;

    &:hover {
      color: $primary-color;
      border-color: $primary-color;
    }

    & :active::before {
      color: $primary-dark;
    }
  }

  & .divider {
    height: 1px;
    color: $color-grey-light;
    margin: 0 10px;
  }

  & .nav-links {
    @media only screen and (max-width: 850px) {
      display: flex;
      justify-content: space-around;
    }

    @media only screen and (max-width: 650px) {
      font-size: 14px;
    }

    & a {
      position: relative;
      display: flex;
      align-items: center;
      margin: 10px 0;
      padding: 10px 10px;
    }

    & i {
      color: $color-grey-light;
      font-size: 18px;
      opacity: 0.8;
      width: 20px;
      text-align: center;

      @media only screen and (max-width: 650px) {
        font-size: 12px;
      }
    }

    & a::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-color: $primary-color;
      transform: scaleY(0);
      transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
        background-color 0.1s;
    }

    & a:hover::before,
    & a.router-link-exact-active::before {
      transform: scaleY(1);
      width: 100%;
    }

    & a:active::before {
      background-color: $primary-dark;
    }

    & span {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 200;
      margin-left: 10px;
      display: inline-block;
      color: $color-grey-light;
      position: relative;
      z-index: 10;

      @media only screen and (max-width: 650px) {
        font-size: 10px;
        margin-left: 2px;
      }
    }
  }
}
</style>
