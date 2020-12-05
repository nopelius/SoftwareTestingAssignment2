import memoize from'../memoize.js';

const object = { 'a': 1, 'b': 2 }
const other = { 'c': 3, 'd': 4 }

test('{ a: 1, b: 2 } is memoized and its values become [1, 2]', () => {
	expect(values(memoize({ 'a': 1, 'b': 2 })).toBe([1, 2]));
});

test('{ c: 3, d: 4 } is memoized and its values become [3, 4]', () => {
	expect(values(memoize({ 'c': 3, 'd': 4 })).toBe([3, 4]));
});

test('{ c: 3, d: 4 } is memoized and its values become [3, 4]', () => {
	expect(values(memoize({ 'c': 3, 'd': 4 })).toBe([3, 4]));
});