import words from'../../words.js';

test('fred, barney, & pebbles is returned as an array of strings fred, barney, pebbles', () => {
    expect(words('fred, barney, & pebbles')).toStrictEqual(['fred', 'barney', 'pebbles']);
});

test('string fred, barney, & pebbles and /[^, ]+/g are returned as an array of strings fred, barney, &, pebbles', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toStrictEqual(['fred', 'barney', '&', 'pebbles']);
});