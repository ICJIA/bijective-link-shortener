'use strict'

module.exports = {
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
  setAlphabet: function (str) {
    this.alphabet = str
  },
  getAlphabet: function () {
    return this.alphabet
  },
  getBase: function () {
    return this.alphabet.length
  },
  encode: function (num) {
    // String length = 58 (no zero, no uppercase 'O', no 'I', no 'l')
    var alphabet = this.alphabet
    // console.log(alphabet.length)
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
