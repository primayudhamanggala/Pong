import * as types from './mutation-types'

export const add = ({commit}, playerData) => {
  axios.post(`http://localhost:3000/players/signup`, playerData)
  .then((response) => {
    commit(types.ADD_PLAYER, response.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const getAll = ({commit}) => {
  axios.get(`http://localhost:3000/players`)
  .then((response) => {
    commit(types.GET_PLAYERS, response.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const update = ({commit}, playerData) => {
  axios.put(`http://localhost:3000/players/${playerData._id}`, playerData)
  .then((response) => {
    commit(types.UPDATE_PLAYER, response.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const remove = ({commit}, playerId) => {
  axios.delete(`http://localhost:3000/players/${playerId}`)
  .then((response) => {
    commit(types.REMOVE_PLAYER, response.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const tweet = ({commit}) => {
  axios.get(`http://localhost:3000/tweet/news`)
  .then((response) => {
    commit(types.TWEET, response.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}
