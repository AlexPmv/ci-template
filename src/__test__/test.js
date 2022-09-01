import checkHealth from '../properties';

test.each([
  [{ name: 'name_1', health: 70 }, 'healthy'],
  [{ name: 'name_2', health: 40 }, 'wounded'],
  [{ name: 'name_3', health: 10 }, 'critical'],
  [{ name: 'name_3', health: NaN }, 'error, there is no health'],
])(('testing %o status %s'), (character, status) => {
  expect(checkHealth(character)).toBe(status);
});
