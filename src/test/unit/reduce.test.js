import reduce from'../../reduce.js';

test('array [1, 2] is reduced with iteratee (sum, n) => sum + n, starting from 0', () => {
	expect(reduce([1, 2], (sum, n) => sum + n, 0).toBe(3));
});