const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const player1 = 'X'
const onBoxClick = function (event) {
  event.preventDefault()
  const currentBoxIndex = $(event.target).data().cellIndex
  store.gameBoard[currentBoxIndex] = player1
  console.log(store)
  console.log(currentBoxIndex)
  api.onGameUpdate(currentBoxIndex, player1)
    .then(ui.placeX)
    .catch()
}

module.exports = {
  onBoxClick
}
