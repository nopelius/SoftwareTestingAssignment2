import toNumber from'../../toNumber.js';

test('3.2 stays the same', () => {
    expect(toNumber(3.2)).toBe(3.2);
});

test('Number.MIN_VALUE becomes 5e-324', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
});

test('Infinity stays the same', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
});

test('string 3.2 becomes a number', () => {
    expect(toNumber('3.2')).toBe(3.2);
});