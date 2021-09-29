import Contact from "@/components/Contact.vue"
import { shallowMount } from "@vue/test-utils"

describe("Contact.vue", () => {
  test("renders contact.name", () => {
    const contact = {
      name: "test"
    }

    const wrapper = shallowMount(Contact, {
      propsData: {
        contact
      }
    })

    const contactName = wrapper.find(".name")
    expect(contactName.text()).toBe(contact.name)
  })

  test("renders contact.id in id attribute", () => {
    const contact = {
      id: "0123"
    }

    const wrapper = shallowMount(Contact, {
      propsData: {
        contact
      }
    })

    expect(wrapper.attributes().id).toBe(`contact-id-${contact.id}`)
  })
})
