import isArrayLike from '../../isArrayLike.js';

test('Array of numbers is an array', () => {
    expect(isArrayLike([1, 2, 3])).toBeTruthy();
});

test('Document bodys children are an array', () => {
    expect(isArrayLike(document.body.children)).toBeTruthy();
});

test('abc is like an array - I guess...', () => {
    expect(isArrayLike('abc')).toBeTruthy();
});

test('Well function is not an array at least!', () => {
    expect(isArrayLike(Function)).toBeFalsy();
});