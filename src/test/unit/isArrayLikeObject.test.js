import isArrayLikeObject from '../../isArrayLikeObject.js';

test('', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBeTruthy();
});

test('', () => {
    expect(isArrayLikeObject(document.body.children)).toBeTruthy();
});

test('', () => {
    expect(isArrayLikeObject('abc')).toBeFalsy();
});

test('', () => {
    expect(isArrayLikeObject(Function)).toBeFalsy();
});