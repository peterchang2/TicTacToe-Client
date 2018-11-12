'use strict'

const store = require('../store.js')
const events = require('./events.js')

const failure = function (FailureResponse) {
  $('#game-message').html('Something Is Wrong or Game Doesnt Exist, Please Try Again')
  $('#game-message').removeClass('success-message')
  $('#game-message').addClass('error-message')
}

const getGameSuccess = function (data) {
  $('#game-message').text(`Games Found ${data.games.length}`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const createGameSuccess = function (data) {
  store.game = data
  store.over = data.game.over
  store.cells = data.game.cells
  console.log(store)
  $('#game-message').html('Game Created and Started')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  // $('#player-turn').html('')
  $('.box').empty()
  $('#player-turn').html(`Player: ${store.player}'s Turn`)
  $('#player-turn').removeClass('error-message')
  $('#player-turn').addClass('success-message')
}

const getGameIdSuccess = function () {
  $('#game-message').html(`Game ID ${events.gameId} retrieved`)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const onGameUpdateSuccess = function (currentBoxIndex) {
  if (store.player === 'X' && store.over === false && store.cells[currentBoxIndex] === '') {
    $(event.target).html('X')
  } else if (store.player === 'O' && store.over === false && store.cells[currentBoxIndex] === '') {
    $(event.target).html('O')
  }
}

module.exports = {
  failure,
  getGameSuccess,
  createGameSuccess,
  getGameIdSuccess,
  onGameUpdateSuccess
}
