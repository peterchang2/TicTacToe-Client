'use strict'

const store = require('../store.js')

const getGame = function (inputData) {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(inputData)
  })
}

const createGame = function (inputData) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(inputData)
  })
}

const getGameId = function (gameId) {
  return $.ajax({
    method: 'GET',
    url: `https://tic-tac-toe-wdi.herokuapp.com/games/` + gameId,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(gameId)
  })
}

module.exports = {
  getGame,
  createGame,
  getGameId
}
