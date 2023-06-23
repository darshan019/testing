const caesarCipher = require('../code/caesarCipher.js')

test('caesar cipher works', () => {
  expect(caesarCipher('One MOre Test...', 5)).toBe('Tsj RTwj Yjxy...')
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs')
  expect(caesarCipher('The Caesar cipher is one of the earliest known and simplest ciphers', 8)).toBe('Bpm Kimaiz kqxpmz qa wvm wn bpm miztqmab svwev ivl aquxtmab kqxpmza')
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})