'use strict'

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
