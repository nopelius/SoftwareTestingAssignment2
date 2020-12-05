import isArrayLike from '../../isArrayLike.js';

test('', () => {
    expect(isArrayLike([1, 2, 3])).toBeTruthy();
});

test('', () => {
    expect(isArrayLike(document.body.children)).toBeTruthy();
});

test('', () => {
    expect(isArrayLike('abc')).toBeTruthy();
});

test('', () => {
    expect(isArrayLike(Function)).toBeFalsy();
});