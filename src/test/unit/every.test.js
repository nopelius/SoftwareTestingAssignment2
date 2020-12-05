import every from '../../every.js';

test('', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBeFalsy();
});

test('', () => {
    expect(every([true, 1, 'yes'], Boolean)).toBeTruthy();
});

test('', () => {
    expect(every([1, 2, 3.2, 4], Number)).toBeTruthy();
});

test('', () => {
    expect(every(["a", "abc", 2, "bgge"], Number)).toBeFalsy();
});

test('', () => {
    expect(every(["a", "abc", "aaa", "bgge"], String)).toBeTruthy();
});