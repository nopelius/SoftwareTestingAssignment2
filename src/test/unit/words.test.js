import words from'../../words.js';

test('fred, barney, & pebbles is returned as an array of strings fred, barney, pebbles', () => {
    expect(words('fred, barney, & pebbles').toBe(['fred', 'barney', 'pebbles']));
});

test('string fred, barney, & pebbles and /[^, ]+/g are returned as an array of strings fred, barney, &, pebbles', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g).toBe(['fred', 'barney', '&', 'pebbles']));
});