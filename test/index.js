'use strict'

var shorten = require('../src/index.js')
// module.myvar = 'Hello world';
// module.test('test input');

// var x = module.encode(4522323123123)
// console.log(x)

// console.log('Default alphabet: ', shorten.getAlphabet())
// shorten.setAlphabet('0123456789abcdefghijkl')
// console.log('Updated alphabet: ', shorten.getAlphabet())
// console.log('Encoded: ', shorten.encode(123456778))

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
