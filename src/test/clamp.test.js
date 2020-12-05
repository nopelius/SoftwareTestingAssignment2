import clamp from '../clamp.js';

test('', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
});

test('', () => {
    expect(clamp(10, -5, 5)).toBe(5);
});

test('', () => {
    expect(clamp(5, 10, 20)).toBe(10);
});

test('', () => {
    expect(clamp(-10, -5, -20)).toBe(-10);
});

test('', () => {
    expect(clamp(0, -5, 5)).toBe(0);
});