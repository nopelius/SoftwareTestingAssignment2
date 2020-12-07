import memoize from'../../memoize.js';

// This test is not functional
const object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };

const values = () => { 
	memoize(values);
	values.cache = Map;
};

test('{ a: 1, b: 2 } is memoized and its values become [1, 2]', () => {
	expect(values(object)).toBe([1, 2]);
});

test('{ c: 3, d: 4 } is memoized and its values become [3, 4]', () => {
	expect(values(other)).toBe([3, 4]);
});

// Test values are altered
//values.cache = new Map();
values.cache.set(object, ['a', 'b']);

test('{ a: a, b: b } is memoized and its values become [a, b]', () => {
	expect(values(object)).toBe(['a', 'b']);
});

// memoize.Cache is replaced
memoize.Cache = WeakMap;