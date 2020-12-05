import add from'../../add.js';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 and -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
})

test('adds 2 + 4 to equal 6', () => {
    expect(add(2, 4)).toBe(6);
})