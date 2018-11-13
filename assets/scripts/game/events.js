'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameLogic = require('./gameLogic.js')

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

const onBoxClick = function (event) {
  event.preventDefault()
  const currentBoxIndex = $(event.target).data().cellIndex
  const player1 = store.player
  const over = store.over
  // console.log(store)
  // console.log(currentBoxIndex)
  api.onGameUpdate(currentBoxIndex, player1)
    .then(ui.onGameUpdateSuccess(currentBoxIndex))
    .catch()
  gameLogic.gameBoard(currentBoxIndex, player1, over)
  gameLogic.switchPlayer(player1)
  // console.log(store)
  // console.log(store.game.game.cells)
  gameLogic.winOrNot(store.game.game.cells)
  $('#message').fadeOut(500)
}

module.exports = {
  onGetGame,
  onCreateGame,
  onGetGameId,
  onBoxClick
}
