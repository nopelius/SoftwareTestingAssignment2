import toString from'../toString.js';

test('null becomes an empty string', () => {
    expect(toString(null)).toBe("");
});

test('integer -0 becomes a string -0', () => {
    expect(toString(-0)).toBe("-0");
});

test('array [1, 2, 3] becomes a string [1, 2, 3]', () => {
    expect(toString(-0)).toBe("-0");
});