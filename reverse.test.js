const reverseString = require('./reverse.js');

test('should return reversed string', () => {
  expect(reverseString('belden')).toBe('nedleb');
})
