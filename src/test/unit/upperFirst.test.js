import upperFirst from'../../upperFirst.js';

test('fred becomes Fred', () => {
    expect(upperFirst('fred')).toBe('Fred');
});

test('FRED stays the same', () => {
    expect(upperFirst('FRED')).toBe('FRED');
});