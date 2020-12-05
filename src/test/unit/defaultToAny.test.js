import defaultToAny from '../../defaultToAny.js';

test('defaultToAny(1, 10, 20) should result in 1', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1);
});

test('defaultToAny(undefined, 10, 20) should result in 10', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10);
});

test('defaultToAny(undefined, null, 20) should result in 20', () => {
    expect(defaultToAny(undefined, null, 20)).toBe(20);
});

test('defaultToAny(undefined, null, NaN) should result in NaN', () => {
    expect(defaultToAny(undefined, null, NaN)).toBe(NaN);
});