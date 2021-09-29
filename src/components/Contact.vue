<template>
  <div id="contact" :id="`contact-id-${contact.id}`">
    <div class="d-flex">
      <img class="avatar" :src="contact.avatar" />
      <div>
        <p class="name">{{ contact.name }}</p>
        <p class="address">{{ contact.street }}, {{ contact.city }}</p>
      </div>
    </div>
    <div class="d-flex">
      <div class="contacts">
        <p>{{ contact.email }}</p>
        <p>{{ contact.phone }}</p>
      </div>
      <div class="buttons">
        <button @click="openModal = true">
          <i class="fas fa-edit"></i>
        </button>
        <modal v-if="openModal" @close="openModal = false">
          <p slot="header">Edit Contact</p>
          <edit-contact-form
            slot="body"
            @close="openModal = false"
            :contact="contact"
          />
        </modal>

        <button @click="onDelete">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal"
import EditContactForm from "@/components/EditContactForm.vue"

export default {
  data() {
    return {
      openModal: false
    }
  },
  components: {
    Modal,
    EditContactForm
  },
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDelete() {
      console.log("object")
      this.$store.dispatch("deleteContact", this.contact)
    },
    onEdit() {}
  }
}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light: #faf9f9;
$color-grey-light-2: #f4f2f2;
$color-grey-light-3: #e7e4e4;
$color-grey-dark: #999;
$primary-color: #00bf72;

#contact {
  padding: 10px;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $color-grey-light-2;
  position: relative;
  transition: 0.25s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    background-color: $primary-color;
    transform: scaleY(0);
    transition: transform 0.5s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  & .avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  & .name {
    color: #004d7a;
    font-size: 15px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }

  & .address {
    font-size: 12px;
    color: $color-grey-dark;
  }

  & .contacts {
    text-align: right;
    font-size: 14px;
    margin-top: 10px;
    color: $color-grey-dark;
    width: 150%;
  }
}

.buttons {
  margin-left: 30px;
  align-self: center;
  & > * {
    font-size: 20px;
    padding-right: 5px;
    transition: 0.25s;
    color: $color-grey-light-3;

    &:hover {
      color: $primary-color;
    }
  }
}
</style>
