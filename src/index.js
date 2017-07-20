'use strict'

module.exports = {
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',

  setAlphabet: function (str = this.alphabet) {
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
  isUnique: function (str = this.alphabet) {
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
  encode: function (num) {
    // String length = 58 (no zero, no uppercase 'O', no 'I', no 'l')
    var _alphabet = this.alphabet
    if (!this.isInteger(num)) {
      throw new Error('The seed number must be an integer > 0')
    }

    if (!this.isPositive(num)) {
      throw new Error('The seed number must be an integer > 0')
    }

    var _base = _alphabet.length
    var encoded = ''
    while (num) {
      var remainder = num % _base
      num = Math.floor(num / _base)
      encoded = _alphabet[remainder].toString() + encoded
    }
    return encoded
  },
  decode: function (str) {
    if (!this.isUnique(str)) throw new Error('String must contain all unique characters')
    var _decoded = 0
    var _base = this.alphabet.length
    while (str) {
      var _index = this.alphabet.indexOf(str[0])
      var _power = str.length - 1
      _decoded += _index * (Math.pow(_base, _power))
      str = str.substring(1)
    }
    return _decoded
  }
}
