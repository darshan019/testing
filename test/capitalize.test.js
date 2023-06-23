const capitalize = require('../code/capitalize.js')

test('capitalize', () => {
  expect(capitalize('expectation')).toBe('Expectation')
})