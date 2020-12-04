import clamp from '../clamp.js';

test('', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
});

test('', () => {
    expect(clamp(10, -5, 5)).toBe(5);
});