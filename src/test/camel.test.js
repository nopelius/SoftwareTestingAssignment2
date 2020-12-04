import camelCase from '../camelCase.js';

test('Foo bar should be transformed into fooBar', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
});

test('--foo-bar-- should be transformed into fooBar', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
});

test('__FOO_BAR__ should be transformed into fooBar', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
})