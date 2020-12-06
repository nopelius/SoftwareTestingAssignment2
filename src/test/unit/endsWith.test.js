import endsWith from '../../endsWith.js';

test('it is true that abc ends with c', () => {
    expect(endsWith('abc', 'c')).toBeTruthy();
});

test('it is false that abc ends with b', () => {
    expect(endsWith('abc', 'b')).toBeFalsy();
});

test('it is true that second last of abc is b', () => {
    expect(endsWith('abc', 'b', 2)).toBeTruthy();
});