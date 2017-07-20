'use strict'

var baseConvert = require('../src/index.js')
console.log('---------------------------')
var seed = 11231239293
var alphabet = 'abcdefghijkl123'
baseConvert.setAlphabet(alphabet)
// console.log('Randomize alphabet:', baseConvert.randomizeAlphabet(12))
var base = baseConvert.getBase()
console.log('Is integer:', baseConvert.isInteger(seed))
console.log('Is positive:', baseConvert.isPositive(seed))
console.log('Base 10 <> Base', base)
var result = baseConvert.encode(seed)
console.log('// ENCODE')
console.log('Seed: ', seed, ' Result: ', result)
console.log('// DECODE')
var original = baseConvert.decode(result)
console.log('Result: ', result, ' Original: ', original)
