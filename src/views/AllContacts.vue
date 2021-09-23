<template>
  <div>
    <div class="d-flex justify-content-between border-bottom">
      <Header><h2 slot="header">All Contacts</h2></Header>
      <search-bar @change="onChange" />
    </div>
    <contact
      v-for="contact in filteredContacts"
      :key="contact.id"
      :contact="contact"
    />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Contact from "../components/Contact.vue"
import SearchBar from "@/components/SearchBar.vue"
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      search: ""
    }
  },
  methods: {
    onChange(value) {
      this.search = value
    }
  },
  components: { Header, Contact, SearchBar },
  computed: {
    ...mapGetters(["contacts"]),
    filteredContacts() {
      return this.contacts.filter((cnt) =>
        cnt.name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light-2: #f4f2f2;

.border-bottom {
  margin: 0 8px;
  border-bottom: 1px solid $color-grey-light-2;
}
</style>
