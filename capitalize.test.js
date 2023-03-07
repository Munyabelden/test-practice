  const word = require('./capitalize.js')

test('should capitalize the string', () => {
  expect(word("belden")).toBe('Belden')
})
