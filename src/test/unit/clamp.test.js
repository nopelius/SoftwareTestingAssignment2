import clamp from '../../clamp.js';

test('Middle value of -10, -5, 5 should be recognized as -5', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
});

test('Middle value of 10, -5, 5 should be recognized as 5', () => {
    expect(clamp(10, -5, 5)).toBe(5);
});

test('Middle value of 5, 10, 20 should be recognized as 10', () => {
    expect(clamp(5, 10, 20)).toBe(10);
});

test('Middle value of -20, -5, -10 should be recognized as -10', () => {
    expect(clamp(-20, -5, -10)).toBe(-10);
});

test('Middle value of 0, -5, 5 should be recognized as 0', () => {
    expect(clamp(0, -5, 5)).toBe(0);
});