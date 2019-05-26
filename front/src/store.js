import Vue from 'vue'
import Vuex from 'vuex'
import cards from '@/store/cards'
import users from '@/store/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    users
  },
  strict: process.env.NODE_ENV !== 'production'
})
