import { mount } from "@vue/test-utils"
import DefaultLayout from "@/layouts/DefaultLayout"
import Sidebar from "@/components/Sidebar"

describe("DefaultLayout.vue", () => {
  test("renders basic components for app layout", () => {
    const wrapper = mount(DefaultLayout, {
      stubs: ["router-link", "router-view"],
      children: [Sidebar]
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
