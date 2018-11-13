'use strict'

const store = require('../store.js')

const failure = function (FailureResponse) {
  $('#game-message').html('Something Went Wrong, Try Again')
  $('#game-message').removeClass('success-message')
  $('#game-message').addClass('error-message')
}
const changePassFailure = function () {
  $('#game-message').html('New Password Cannot Match Old Password')
  $('#game-message').removeClass('success-message')
  $('#game-message').addClass('error-message')
}

const signUpSuccess = function (signUpResponse) {
  $('#game-message').html('You Signed Up Successfully')
  $('.sign-up-form').slideUp(500)
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  // console.log(store.user)
  $('#message').html('You Signed In Successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('.sign-up-form').slideUp(500)
  $('.sign-in-form').slideUp(500)
  $('#change-pass-btn').show()
  $('#sign-out-btn').show()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('.start-game-btn').fadeIn(500)
  $('.get-all-game-btn').fadeIn(500)
  $('.game-container').fadeIn(500)
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#game-message').html('You Changed Password Successfully')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#change-password-form').slideUp(500)
}

const signOutSuccess = function () {
  $('#game-message').html('You Signed Out Successfully')
  $('#player-turn').empty()
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#change-pass-btn').hide()
  $('#change-password-form').slideUp(500)
  $('#sign-out-btn').hide()
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('.start-game-btn').hide(500)
  $('.get-all-game-btn').hide(500)
  $('.box').html('')
  $('.game-container').fadeOut(500)
  $('.got-game').fadeIn(500)
  $('#message').html('')
  $('#change-password-form').trigger('reset')
  $('#message-box').addClass('sticky')
  setTimeout(function () {
    $('#game-message').fadeOut(500).empty()
  }, 2000)
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  changePassFailure

}
