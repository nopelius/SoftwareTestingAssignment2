import isBoolean from'../../isBoolean.js';

test('false is boolean', () => {
    expect(isBoolean(false)).toBeTruthy();
});

test('null is not boolean', () => {
    expect(isBoolean(null)).toBeFalsy();
});