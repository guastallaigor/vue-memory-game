import UserService from '@/services/UserService'

const state = {
  users: [],
  activeUser: ''
}

const getters = {}

const actions = {
  async getAll ({ commit }) {
    const { data } = await UserService.getAll()
    commit('setUsers', data)
  },
  async saveActiveUser ({ state }, moves) {
    const user = {
      name: state.activeUser,
      moves
    }
    const response = await UserService.save(user)

    return response
  }
}

const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  setActiveUser (state, activeUser) {
    state.activeUser = activeUser
  }
}

const users = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}

export default users
