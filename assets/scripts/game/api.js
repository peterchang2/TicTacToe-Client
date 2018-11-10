'use strict'

const store = require('../store.js')

const getGame = function (inputData) {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/',
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
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/',
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
    url: `https://tic-tac-toe-wdi.herokuapp.com/games/` + gameId,
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
    url: `https://tic-tac-toe-wdi.herokuapp.com/games/` + store.game.game.id,
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
