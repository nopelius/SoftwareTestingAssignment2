import defaultTo from '../../defaultTo.js';

test('defaultTo(1, 10) should result in 1', () => {
    expect(defaultTo(1, 10)).toBe(1);
});

test('defaultTo(undefined, 10) should result in 10', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
});