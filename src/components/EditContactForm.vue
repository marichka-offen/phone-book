<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="contactName" class="form-label">Name</label>
      <input
        v-model="contact.name"
        type="text"
        class="form-control"
        id="contactName"
      />
    </div>
    <div class="mb-3">
      <label for="contactEmail" class="form-label">Email</label>
      <input
        v-model="contact.email"
        type="email"
        class="form-control"
        id="contactEmail"
      />
    </div>
    <div class="mb-3">
      <label for="contactAddress" class="form-label">Address</label>
      <input
        v-model="contact.street"
        type="text"
        class="form-control"
        id="contactAddress"
      />
    </div>
    <div class="mb-3">
      <label for="contactCity" class="form-label">City</label>
      <input
        v-model="contact.city"
        type="text"
        class="form-control"
        id="contactCity"
      />
    </div>
    <div class="mb-3">
      <label for="contactPhone" class="form-label">Phone</label>
      <input
        v-model="contact.phone"
        type="tel"
        class="form-control"
        id="contactPhone"
      />
    </div>
    <div class="mb-3">
      <label for="contactCategory" class="form-label">Category</label>
      <select
        class="form-select"
        id="contactCategory"
        v-model="contact.category"
      >
        <option disabled>Select category..</option>
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === contact.category"
        >
          {{ option }}
        </option>
      </select>
      <p id="categoryHelp" class="form-text">
        If not selected, contact will be automatically added to "Other" category
      </p>
    </div>
    <div class="mb-3">
      <label for="contactAvatar" class="form-label">Avatar URL</label>
      <input
        v-model="contact.avatar"
        type="url"
        class="form-control"
        id="contactAvatar"
      />
    </div>

    <button type="submit" class="btn submit-button" @click="onSubmit">
      Update Contact
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      categories: ["family", "friends", "work", "other"]
    }
  },
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSubmit() {
      let contact = {
        ...this.contact
      }
      if (!this.contact.category) {
        contact = {
          ...this.contact,
          category: "other"
        }
      }
      this.$store.dispatch("updateContact", contact)
      this.$emit("close")
    }
  }
}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light: #faf9f9;
$color-grey-light-4: #ccc;
$primary-color: #00bf72;
$primary-dark: #008793;

form {
  padding: 15px;
}

label {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 12px;
  color: $primary-color;
  margin: 0;
}

.submit-button {
  color: $color-grey-light;
  text-transform: uppercase;
  width: 100%;
  background-color: $primary-color;

  &:focus {
    background-color: $primary-dark;
  }
}

#categoryHelp {
  color: $color-grey-light-4;
  font-size: 12px;
}
</style>
