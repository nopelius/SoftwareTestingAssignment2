import ceil from '../../ceil.js';

test('4.006 should get rounded up to 5', () => {
    expect(ceil(4.006)).toBe(5);
});

test('(6.004 should get rounded up to 6.1', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
});

test('6040 should get rounded up to 6100', () => {
    expect(ceil(6040, -2)).toBe(6100);
});