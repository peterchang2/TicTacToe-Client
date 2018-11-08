'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetGame = function () {
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

module.exports = {
  onGetGame,
  onCreateGame
}
