import isArrayLikeObject from '../../isArrayLikeObject.js';

test('these [1, 2, 3] are array like object', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBeTruthy();
});

test('document.body.children is an array like object', () => {
    expect(isArrayLikeObject(document.body.children)).toBeTruthy();
});

test('abc is not an array like object', () => {
    expect(isArrayLikeObject('abc')).toBeFalsy();
});

test('function - likewise - is not an array like object', () => {
    expect(isArrayLikeObject(Function)).toBeFalsy();
});