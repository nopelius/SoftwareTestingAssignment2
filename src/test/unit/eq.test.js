import eq from '../../eq.js';

const object = { 'a': 1 }
const other = { 'a': 1 }

test('', () => {
    expect(eq(object, object)).toBeTruthy();
});

test('', () => {
    expect(eq(object, other)).toBeFalsy();
});

test('', () => {
    expect(eq('a', 'a')).toBeTruthy();
});

test('', () => {
    expect(eq('a', Object('a'))).toBeFalsy();
});

test('', () => {
    expect(eq(NaN, NaN)).toBeTruthy();
});