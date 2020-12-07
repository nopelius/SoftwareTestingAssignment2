import isSymbol from'../../isSymbol.js';

test('Symbol.iterator is symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
});

test('string abc is not symbol', () => {
    expect(isSymbol('abc')).toBe(false);
});