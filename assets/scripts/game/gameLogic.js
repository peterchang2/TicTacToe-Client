
const api = require('./api.js')
// const ui = require('./ui.js')
const store = require('../store.js')

store.Over = false

const gameLogic = function (player) {
  const playerOne = 'X'
  const playerTwo = 'O'
  const players = player === 'X' ? 'O' : 'X'
  store.player = players
  if (store.player === 'O') {
    $(event.target).html('X')
  } else if (store.player === 'X') {
    $(event.target).html('O')
  }

  return store.player
}

const gameBoard = function (id, value) {
  if (store.cells[id] === '') {
    store.cells[id] = value
    console.log('Worked')
  } else if (store.cells[id] === 'X' || 'O') {
    console.log('Misclicked')
  } else if (store.game.game.over === true) {
    $('.box').off('click')
  } else if (store.game.game.over === false) {
    $('.box').on('click')
  }
}

const winOrNot = function (board) {
  if ((board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
  (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
  (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
  (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
  (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
  (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
  (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
  (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')) {
    store.game.game.over = true
    console.log(store.game.game.over)
    store.player = 'X'
    $('#game-message').html('X Wins!!!')
  } else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
  (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
  (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
  (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
  (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
  (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
  (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
  (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')) {
    store.game.game.over = true
    store.player = 'X'
    $('#game-message').html('O Wins!!!')
  } else if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
    store.game.game.over = true
    store.player = 'X'
    $('#game-message').html('You Tied')
  }
}

module.exports = {
  gameLogic,
  winOrNot,
  gameBoard
}
