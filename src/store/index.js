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
    },
    DELETE_CONTACT(state, contact) {
      let index = state.contacts.findIndex((cnt) => cnt.id == contact.id)
      state.contacts.splice(index, 1)
    },
    UPDATE_CONTACT(state, contact) {
      let index = state.contacts.findIndex((cnt) => cnt.id == contact.id)
      state.contacts[index] = contact
    }
  },

  actions: {
    createContact({ commit }, contact) {
      commit("ADD_CONTACT", contact)
    },
    deleteContact({ commit }, contact) {
      commit("DELETE_CONTACT", contact)
    },
    updateContact({ commit }, contact) {
      commit("UPDATE_CONTACT", contact)
    }
  },
  modules: {}
})
