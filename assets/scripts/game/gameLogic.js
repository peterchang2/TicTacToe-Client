
// const api = require('./api.js')
// const ui = require('./ui.js')
const store = require('../store.js')

const switchPlayer = function (player) {
  if (store.misclick === 'misclick') {
    return
  }
  if (store.misclick === 'click') {
    const players = player === 'X' ? 'O' : 'X'
    store.player = players
    $('#player-turn').html(`Player: ${store.player}'s Turn`)
    return players
  }
}

const gameBoard = function (id, value, over) {
  if (over === true) {
    return
  }
  if (store.cells[id] === '') {
    store.cells[id] = value
    // console.log('Worked')
    store.misclick = 'click'
    // e.preventDefault()
  } else if (store.cells[id] === 'X' || 'O') {
    $('#game-message').html('Misclicked')
    store.misclick = 'misclick'
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
    store.over = true
    console.log(store.over)
    store.player = 'X'
    store.winner = 'X'
    $('#game-message').html('X Wins!!!')
  } else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
  (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
  (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
  (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
  (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
  (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
  (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
  (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')) {
    store.over = true
    store.player = 'X'
    store.winner = 'O'
    $('#game-message').html('O Wins!!!')
  } else if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
    store.over = true
    store.player = 'X'
    store.winner = 'Tie'
    $('#game-message').html('You Tied')
  }
}

module.exports = {
  switchPlayer,
  winOrNot,
  gameBoard
}
