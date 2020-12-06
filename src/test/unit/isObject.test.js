import isObject from'../../isObject.js';

test('{} is Object', () => {
    expect(isObject({}).toBeTruthy());
});

test('[1, 2, 3] is Object', () => {
    expect(isObject([1, 2, 3]).toBeTruthy());
});

test('Function is Object', () => {
    expect(isObject(Function).toBeTruthy());
});

test('null is not Object', () => {
    expect(isObject(null).toBeFalsy());
});