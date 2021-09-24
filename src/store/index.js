import Vue from "vue"
import Vuex from "vuex"
import contacts from "../data/contacts.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts
  },

  getters: {
    contacts(state) {
      return state.contacts
    }
  },
  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact)
    }
  },
  actions: {
    createContact({ commit }, contact) {
      commit("ADD_CONTACT", contact)
    }
  },
  modules: {}
})
