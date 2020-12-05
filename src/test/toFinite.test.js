import toFinite from'../toFinite.js';

test('3.2 stays the same', () => {
    expect(toFinite(3.2)).toEqual(3.2);
});

test('Number.MIN_VALUE becomes 5e-324', () => {
    expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324);
});

test('Infinity becomes 1.7976931348623157e+308', () => {
    expect(toFinite(Infinity)).toEqual(1.7976931348623157e+308);
});

test('the string 3.2 becomes 3', () => {
    expect(toFinite('3.2')).toEqual(3.2);
});