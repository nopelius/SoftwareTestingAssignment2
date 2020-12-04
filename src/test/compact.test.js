import compact from '../compact.js';

test('Should filter falsy-values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toBe([1, 2, 3]);
});