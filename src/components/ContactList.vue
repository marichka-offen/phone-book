<template>
  <div>
    <Header
      ><h2 slot="header">{{ category }}</h2></Header
    >
    <search-bar @change="onChange" />
    <contact
      v-for="contact in filteredContacts"
      :key="contact.id"
      :contact="contact"
    />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Contact from "@/components/Contact.vue"
import SearchBar from "@/components/SearchBar.vue"
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      category: this.$route.name,
      search: ""
    }
  },
  components: { Header, Contact, SearchBar },
  methods: {
    onChange(value) {
      this.search = value
    }
  },
  computed: {
    ...mapGetters(["contacts"]),
    categorizedContacts() {
      return this.contacts.filter(
        (cnt) => cnt.category == this.category.toLowerCase()
      )
    },
    filteredContacts() {
      return this.categorizedContacts.filter((cnt) =>
        cnt.name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
