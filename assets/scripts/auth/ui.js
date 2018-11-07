'use strict'

const store = require('../store.js')

$('#sign-up-btn').click(function () {
  $('.sign-up-form').slideDown(500)
  $('.sign-in-form').slideUp(500)
})
$('#sign-in-btn').click(function () {
  $('.sign-in-form').slideDown(500)
  $('.sign-up-form').slideUp(500)
})
$('#change-pass-btn').click(function () {
  $('.change-password-form').slideDown(500)
})

const failure = function (FailureResponse) {
  $('#message').html('Something Went Wrong, Please Try Again')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You Signed Up Successfully')
  $('.sign-up-form').slideUp(500)
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').html('You Signed In Successfully')
  $('.sign-up-form').slideUp(500)
  $('.sign-in-form').slideUp(500)
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#change-pass-btn').show()
  $('#sign-out-btn').show()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').html('You Changed Password Successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#change-password-form').slideUp(500)
}

const signOutSuccess = function () {
  $('#message').html('You Signed Out Successfully')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#change-pass-btn').hide()
  $('#change-password-form').slideUp(500)
  $('#sign-out-btn').hide()
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess

}
