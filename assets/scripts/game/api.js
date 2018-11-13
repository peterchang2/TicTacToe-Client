'use strict'

const store = require('../store.js')
const config = require('../config.js')

const getGame = function (inputData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(inputData)
  })
}

const createGame = function (createGameResponse) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {}
  })
}

const getGameId = function (gameId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + gameId,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(gameId)
  })
}

const onGameUpdate = function (index, value) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.game.id,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': $(event.target).attr('data-cell-index'),
            'value': store.player
          },
          'over': store.Over
        }
      }
    )
  })
}

module.exports = {
  getGame,
  createGame,
  getGameId,
  onGameUpdate
}
