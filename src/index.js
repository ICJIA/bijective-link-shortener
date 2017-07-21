'use strict'

module.exports = {
  // Default encoding alphabet.
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',

  setAlphabet: function (str) {
    if (!this.isUnique(str)) throw new Error('String must contain all unique characters')
    this.alphabet = str
    return this.alphabet
  },
  getAlphabet: function () {
    return this.alphabet
  },
  getBase: function () {
    return this.alphabet.length
  },
  isInteger: function (num) {
    return Number.isInteger(num)
  },
  isPositive: function (num) {
    return (num > 0)
  },
  isUnique: function (str) {
    var obj = {}
    for (var z = 0; z < str.length; ++z) {
      var ch = str[z]
      if (obj[ch]) {
        return false
      } else {
        obj[ch] = true
      }
    }
    return true
  },
  randomizeAlphabet: function () {
    var shuffled = this.alphabet.split('').sort(function () { return 0.5 - Math.random() }).join('')
    this.alphabet = shuffled
    return shuffled
  },
  resetAlphabet: function () {
    this.alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
    return this.alphabet
  },
  encode: function (num) {
    var alphabet = this.alphabet
    if (!this.isInteger(num)) {
      throw new Error('The seed number must be an integer > 0')
    }

    if (!this.isPositive(num)) {
      throw new Error('The seed number must be an integer > 0')
    }

    var base = alphabet.length
    var encoded = ''
    while (num) {
      var remainder = num % base
      num = Math.floor(num / base)
      encoded = alphabet[remainder].toString() + encoded
    }
    return encoded
  },
  decode: function (str) {
    var decoded = 0
    var base = this.alphabet.length
    while (str) {
      var index = this.alphabet.indexOf(str[0])
      var power = str.length - 1
      decoded += index * (Math.pow(base, power))
      str = str.substring(1)
    }
    return decoded
  }
}
