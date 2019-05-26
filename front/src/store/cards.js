const state = {
  counter: 0,
  moves: 0,
  playerWon: false,
  isRestarting: false
}

const getters = {}

const actions = {}

const mutations = {
  setCounter (state, counter) {
    state.counter = counter
  },
  setMoves (state, moves) {
    state.moves = moves
  },
  clearPlayerWon (state) {
    state.playerWon = false
  },
  showPlayerWon (state) {
    state.playerWon = true
  },
  restart (state) {
    state.isRestarting = !state.isRestarting
  }
}

const cards = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}

export default cards
