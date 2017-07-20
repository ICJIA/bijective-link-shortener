'use strict'

// var baseConvert = require('../src/index.js')
// console.log('---------------------------')
// var seed = 11231239293
// var alphabet = 'abcdefghijkl123'
// baseConvert.setAlphabet(alphabet)
// console.log('Randomize alphabet:', baseConvert.randomizeAlphabet(12))
// var base = baseConvert.getBase()
// console.log('Is integer:', baseConvert.isInteger(seed))
// console.log('Is positive:', baseConvert.isPositive(seed))
// console.log('Is unique:', baseConvert.isUnique())
// console.log('Base 10 <> Base', base)
// var result = baseConvert.encode(seed)
// console.log('// ENCODE')
// console.log('Seed: ', seed, ' Result: ', result)
// console.log('// DECODE')
// var original = baseConvert.decode(result)
// console.log('Result: ', result, ' Original: ', original)

var expect = require('chai').expect
var baseConvert = require('../src/index.js')

describe ('#baseConvert', function () {
  it ('Encode should output a string', function() {
        var result = baseConvert.encode(1234)
        expect (result).to.be.string
  })

  it ('Decode should output a number', function() {
        var result = baseConvert.decode('1234')
        expect (result).to.be.a('number')
  })

  it ('Default alphabet should be unique', function() {
        var result = baseConvert.isUnique()
        expect (result).to.be.true
  })

  it ('User defined alphabet should be unique', function() {
        var result = baseConvert.isUnique('abcdefghijklm')
        expect (result).to.be.true
  })

  it ('Non-unique alpabets should fail', function() {
        var result = baseConvert.isUnique('aabcdefghijklm')
        expect (result).to.be.false
  })
})
