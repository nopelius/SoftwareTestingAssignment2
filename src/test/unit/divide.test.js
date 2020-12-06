import divide from '../../divide.js';

test('6 divided by 2 should result in 1.5', () => {
    expect(divide(6, 4)).toBe(1.5);
});

test('6 divided by 3 should result in 2', () => {
    expect(divide(6, 3)).toBe(2);
});

test('8 divided by 1 should result in 8', () => {
    expect(divide(8, 1)).toBe(8);
});
