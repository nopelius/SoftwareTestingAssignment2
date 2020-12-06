import toInteger from'../../toInteger.js';

test('3.2 becomes 3', () => {
    expect(toInteger(3.2)).toEqual(3);
});

test('Number.MIN_VALUE becomes 0', () => {
    expect(toInteger(Number.MIN_VALUE)).toEqual(0);
});

test('Infinity becomes 1.7976931348623157e+308', () => {
    expect(toInteger(Infinity)).toEqual(1.7976931348623157e+308);
});

test('the string 3.2 becomes 3', () => {
    expect(toInteger('3.2')).toEqual(3);
});