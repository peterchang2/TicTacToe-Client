'use strict'

const store = require('../store.js')
const config = require('../config.js')

const signUp = function (inputData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up/',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = function (inputData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in/',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const changePassword = function (inputData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(inputData)
  })
}

const signOut = function (inputData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out/',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
