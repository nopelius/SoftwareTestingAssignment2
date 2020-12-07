import slice from'../../slice.js';

test('array [1, 2, 3, 4] is sliced from 2 to end', () => {
    expect(slice([1, 2, 3, 4], 2)).toStrictEqual([3, 4]);
});