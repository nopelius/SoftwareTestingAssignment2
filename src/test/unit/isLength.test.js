import isLength from'../../isLength.js';

test('3 is a length', () => {
    expect(isLength(3)).toBe(true);
});

test('Number.MIN_VALUE is not a length', () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false);
});

test('Infinity is not a length', () => {
    expect(isLength(Infinity)).toBe(false);
});

test('string 3 is not a length', () => {
    expect(isLength('3')).toBe(false);
});