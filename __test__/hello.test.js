const testaroos = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(testaroos.sum(1, 2)).toBe(3);
});

test('toggle true and false', () => {
  expect(testaroos.toggleMe(true)).toBeFalsy();
});
