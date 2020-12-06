import map from'../../map.js';

function square(n) {
	return n * n
}

test('[4, 8] is mapped squared', () => {
    expect(map([4, 8], square).toBe([16, 64]));
});