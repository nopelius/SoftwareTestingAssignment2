import isObjectLike from'../../isObjectLike.js';

test('{} is object-like', () => {
    expect(isObjectLike(1).toBeTruthy());
});

test('[1, 2, 3] is object-like', () => {
    expect(isObjectLike([1, 2, 3]).toBeTruthy());
});

test('Function is not object-like', () => {
    expect(isObjectLike(Function).toBeFalsy());
});

test('null is not object-like', () => {
    expect(isObjectLike(null).toBeFalsy());
});