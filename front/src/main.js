import Vue from 'vue'
import { VLazyImagePlugin } from 'v-lazy-image'
import VueSocketIO from 'vue-socket.io'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(VLazyImagePlugin)
Vue.use(new VueSocketIO({
  debug: process.env.NODE_ENV !== 'production',
  connection: process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'https://nodejs-memory-game.now.sh'
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
