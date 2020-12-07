import keys from'../../keys.js';

function Foo() {
	this.a = 1
	this.b = 2
}

Foo.prototype.c = 3

const foo = new Foo;

// This may not be the correct way to do this -Tuomas
// Remember: Iteration order not guaranteed. 
test('Foo has keys a and b', () => {
	expect(keys(foo)).toEqual(expect.arrayContaining(['a', 'b']));
	expect(keys(foo)).toHaveLength(2);
});

test('string hi has keys 0 and 1', () => {
    expect(keys('hi')).toEqual(expect.arrayContaining(['0', '1']));
	expect(keys('hi')).toHaveLength(2);
});