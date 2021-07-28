import Vue from "vue"
import VueRouter from "vue-router"
import Search from "../views/Search.vue"
import History from "../views/History.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/search/:searchTerm?",
    name: "Search",
    component: Search
  },
  {
    path: "/history",
    name: "History",
    component: History
  },
  {
    path: "*",
    redirect: "/search"
  }
]

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
})

export default router
