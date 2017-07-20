'use strict'

var expect = require('chai').expect
var baseConvert = require('../src/index.js')
const random = require('random-js')()

describe ('#baseConvert', function () {
  it ('encode should return a string', function() {
        var result = baseConvert.encode(1234)
        expect (result).to.be.string
  })

  it ('decode() should return a number', function() {
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

  it ('getBase() should return a number', function() {
        var result = baseConvert.getBase()
        expect (result).to.be.a('number')
  })




})
