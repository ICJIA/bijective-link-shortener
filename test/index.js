'use strict'

var shorten = require('../src/index.js')

var seed = 39234398498
var base = shorten.getBase()
console.log('---------------------------')
console.log('Base 10 <> Base', base)
var result = shorten.encode(seed)
console.log('// ENCODE')
console.log('Seed: ', seed, ' Result: ', result)
console.log('// DECODE')
var original = shorten.decode(result)
console.log('Result: ', result, ' Original: ', original)
