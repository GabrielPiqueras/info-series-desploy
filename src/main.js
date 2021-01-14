import Vue from 'vue'
import App from '@/App.vue'
require('@/assets/scss/main.scss');

// Router
import VueRouter from 'vue-router'
import routes from '@/routes.js'

// Plugins
import EventBus from '@/plugins/event-bus.js'

// Filtros
import MsToMm from '@/filters/ms-to-mm.js'
import ConvertDolarEuros from '@/filters/dolar-euros.js'

// Directivas personalizadas
import blur from '@/directives/blur.js'

Vue.use(EventBus)
Vue.use(VueRouter)
Vue.use(MsToMm)
Vue.use(ConvertDolarEuros)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})