import Vue from "vue"
import VueRouter from "vue-router"
import SearchPage from "../views/SearchPage.vue"
import History from "../views/History.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/search/:searchTerm?",
    name: "Search",
    component: SearchPage
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
