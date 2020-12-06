import isEmpty from'../../isEmpty.js';

test('null is empty', () => {
    expect(isEmpty(null).toBeTruthy());
});

test('true is empty', () => {
    expect(isEmpty(true).toBeTruthy());
});

test('1 is empty', () => {
    expect(isEmpty(1).toBeTruthy());
});

test('[1, 2, 3] is not empty', () => {
    expect(isEmpty([1, 2, 3]).toBeFalsy());
});

test('string abc is not empty', () => {
    expect(isEmpty('abc').toBeFalsy());
});

test('{ a: 1 } is not empty', () => {
    expect(isEmpty({ 'a': 1 }).toBeFalsy());
});