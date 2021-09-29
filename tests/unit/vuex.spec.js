import { shallowMount, createLocalVue } from "@vue/test-utils"
import Contact from "@/components/Contact.vue"
import Vuex from "vuex"

const localVue = createLocalVue()

localVue.use(Vuex)

describe("getters", () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      contacts: () => [
        {
          id: 12345,
          name: "Test",
          email: "Test",
          street: "Test",
          city: "Test",
          phone: "Test",
          category: "other",
          avatar: "Test"
        }
      ]
    }
    store = new Vuex.Store({
      getters
    })
  })
  test("renders store.getters.contacts", () => {
    const wrapper = shallowMount(Contact, {
      store,
      localVue,
      propsData: {
        contact: {
          id: 12345,
          name: "Test",
          email: "Test",
          street: "Test",
          city: "Test",
          phone: "Test",
          category: "other",
          avatar: "Test"
        }
      }
    })
    const name = wrapper.find(".name")
    expect(name.text()).toBe(getters.contacts()[0].name)
  })
})
