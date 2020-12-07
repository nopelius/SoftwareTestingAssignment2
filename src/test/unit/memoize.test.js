import memoize from'../../memoize.js';

// This test is not functional
const object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };

function values(anObject){
	let arr = [];
	for(let prop in anObject){
		arr.push(anObject[prop]);
	}
	return arr;
}

const memoizedValues = memoize(values);

test('{ a: 1, b: 2 } is memoized and its values become [1, 2]', () => {
	expect(memoizedValues(object)).toEqual([1, 2]);
});

test('{ c: 3, d: 4 } is memoized and its values become [3, 4]', () => {
	expect(memoizedValues(other)).toEqual([3, 4]);
});

//Test values are altered

test('{ a: a, b: b } is memoized and its values become [a, b]', () => {
	console.log(memoizedValues.cache);
	memoizedValues.cache.set(object, ['a', 'b']);
	expect(memoizedValues(object)).toEqual(['a', 'b']);
});