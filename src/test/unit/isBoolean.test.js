import isBoolean from'../../isBoolean.js';

test('false is boolean', () => {
    expect(isBoolean(false)).toBe(true);
});

test('null is not boolean', () => {
    expect(isBoolean(null)).toBe(false);
});