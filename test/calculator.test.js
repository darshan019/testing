const calculator = require('../code/calculator.js')

test('calculator', () => {
  expect(calculator().add(10, 15)).toBe(25)
  expect(calculator().subtract(15, 10)).toBe(5)
  expect(calculator().divide(60, 15)).toBe(4)
  expect(calculator().multiply(10, 15)).toBe(150)
})