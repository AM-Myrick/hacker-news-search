import Vue from "vue"
import App from "./App.vue"
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)


Vue.config.productionTip = false

import store from "./store";
import router from './router'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app")
