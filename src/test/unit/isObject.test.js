import isObject from'../../isObject.js';

test('{} is Object', () => {
    expect(isObject({})).toBe(true);
});

test('[1, 2, 3] is Object', () => {
    expect(isObject([1, 2, 3])).toBe(true);
});

test('Function is Object', () => {
    expect(isObject(Function)).toBe(true);
});

test('null is not Object', () => {
    expect(isObject(null)).toBe(false);
});