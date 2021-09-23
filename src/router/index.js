import Vue from "vue"
import VueRouter from "vue-router"

import AllContacts from "@/views/AllContacts.vue"
import Family from "@/views/Family.vue"
import Friends from "@/views/Friends.vue"
import Work from "@/views/Work.vue"
import Other from "@/views/Other.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "AllContacts",
    component: AllContacts
  },
  {
    path: "/family",
    name: "Family",
    component: Family
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends
  },
  {
    path: "/work",
    name: "Work",
    component: Work
  },
  {
    path: "/other",
    name: "Other",
    component: Other
  }
  //   { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
