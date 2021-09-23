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
  mutations: {},
  actions: {},
  modules: {}
})

// export default {
//     getEvents(perPage, page) {
//         return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
//     },

//     getEvent(id) {
//         return apiClient.get('/events/' + id)
//     },

//     postEvent(event) { // new post request
//         return apiClient.post('/events', event)
//       }
// }
