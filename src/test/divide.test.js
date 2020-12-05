import divide from '../divide.js';

test('', () => {
    expect(divide(6, 4)).toBe(1.5);
});

test('', () => {
    expect(divide(6, 3)).toBe(2);
});

test('', () => {
    expect(divide(8, 1)).toBe(8);
});
