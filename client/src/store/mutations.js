import * as types from './mutation-types'

export const mutations = {

  [types.ADD_PLAYER] (state, payload) {
    state.players.push(payload)
  },

  [types.GET_PLAYERS] (state, payload) {
    state.players = payload
  },

  [types.UPDATE_PLAYER] (state, payload) {
    state.players = state.players.map(player =>
      player._id === payload._id ? payload : player
    )
  },

  [types.REMOVE_PLAYER] (state, payload) {
    state.players = state.players.filter(player =>
      player._id != payload._id
    )
  }

}
