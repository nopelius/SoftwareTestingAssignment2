import isLength from'../../isLength.js';

test('3 is a length', () => {
    expect(isLength(3).toBeTruthy());
});

test('Number.MIN_VALUE is not a length', () => {
    expect(isLength(Number.MIN_VALUE).toBeFalsy());
});

test('Infinity is not a length', () => {
    expect(isLength(Infinity).toBeFalsy());
});

test('string 3 is not a length', () => {
    expect(isLength('3').toBeFalsy());
});