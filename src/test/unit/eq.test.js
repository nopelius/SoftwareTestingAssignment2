import eq from '../../eq.js';

const object = { 'a': 1 }
const other = { 'a': 1 }

test('Object is an object is an object - this much is clear', () => {
    expect(eq(object, object)).toBeTruthy();
});

test('object is not another object that is not an object - this is equally clear', () => {
    expect(eq(object, other)).toBeFalsy();
});

test('a is a - no further questions', () => {
    expect(eq('a', 'a')).toBeTruthy();
});

test('a is not an object a', () => {
    expect(eq('a', Object('a'))).toBeFalsy();
});

test('if you have NaN - there is NaN', () => {
    expect(eq(NaN, NaN)).toBeTruthy();
});