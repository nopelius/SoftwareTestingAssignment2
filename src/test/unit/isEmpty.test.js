import isEmpty from'../../isEmpty.js';

test('null is empty', () => {
    expect(isEmpty(null)).toBe(true);
});

test('true is empty', () => {
    expect(isEmpty(true)).toBe(true);
});

test('1 is empty', () => {
    expect(isEmpty(1)).toBe(true);
});

test('[1, 2, 3] is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
});

test('string abc is not empty', () => {
    expect(isEmpty('abc')).toBe(false);
});

test('{ a: 1 } is not empty', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
});