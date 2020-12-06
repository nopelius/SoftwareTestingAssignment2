import isSymbol from'../../isSymbol.js';

test('Symbol.iterator is symbol', () => {
    expect(isSymbol(Symbol.iterator).toBeTruthy());
});

test('string abc is not symbol', () => {
    expect(isSymbol('abc').toBeFalsy());
});