
const api = require('./api.js')
// const ui = require('./ui.js')
const store = require('../store.js')

const gameLogic = function (player) {
  const players = player === 'X' ? 'O' : 'X'
  store.player = players
  return store.player
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
    $('.box').off('click')
    store.game.game.over = true
    $('#game-message').html('X Wins!!!')
  } else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
  (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
  (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
  (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
  (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
  (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
  (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
  (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')) {
    $('.box').off('click')
    store.game.game.over = true
    $('#game-message').html('O Wins!!!')
  } else if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
    $('.box').off('click')
    store.game.game.over = true
    $('#game-message').html('You Tied')
  }
}

// const turnClickOn = function (event) {
//   api.onGameUpdate(event)
// }

module.exports = {
  gameLogic,
  winOrNot
  // turnClickOn
}
