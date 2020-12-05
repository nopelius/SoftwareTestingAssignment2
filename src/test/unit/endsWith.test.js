import endsWith from '../../endsWith.js';

test('', () => {
    expect(endsWith('abc', 'c')).toBeTruthy();
});

test('', () => {
    expect(endsWith('abc', 'b')).toBeFalsy();
});

test('', () => {
    expect(endsWith('abc', 'b', 2)).toBeTruthy();
});