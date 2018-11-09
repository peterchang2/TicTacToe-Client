'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onGetGame = function (event) {
  event.preventDefault()
  api.getGame()
    .then(ui.getGameSuccess)
    .catch(ui.failure)
}

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onGetGameId = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  $(event.target).trigger('reset')
  const gameId = gameData.games.id
  api.getGameId(gameId)
    .then(ui.getGameIdSuccess)
    .catch(ui.failure)
}

const player1 = 'X'
const onBoxClick = function (event) {
  event.preventDefault()
  const currentBoxIndex = $(event.target).data().cellIndex
  store.gameBoard[currentBoxIndex] = player1
  console.log(store)
  console.log(currentBoxIndex)
  api.onGameUpdate(currentBoxIndex, player1)
    .then()
    .catch()
}

module.exports = {
  onGetGame,
  onCreateGame,
  onGetGameId,
  onBoxClick
}