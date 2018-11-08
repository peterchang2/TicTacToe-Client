'use strict'

// const store = require('../store.js')

const failure = function (FailureResponse) {
  $('#game-message').html('Something Is Wrong or Game Doesnt Exist, Please Try Again')
  $('#game-message').removeClass('success-message')
  $('#game-message').addClass('error-message')
}

const getGameSuccess = function () {
  $('#game-message').html('Game Found')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const createGameSuccess = function () {
  $('#game-message').html('Game Created and Started')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

module.exports = {
  failure,
  getGameSuccess,
  createGameSuccess
}
