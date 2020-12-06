import get from '../../get.js';

const object = { 'a': [{ 'b': { 'c': 3 } }] };

test('you can get 3 from an object', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
});

test('you can still get a default - in just a different way', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
});

test('if nothing is found we get a default', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
});