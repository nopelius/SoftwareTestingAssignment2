import every from '../../every.js';

test('Every one of these is not a boolean', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBeFalsy();
});

test('every one of these is a boolean', () => {
    expect(every([true, 1, 'yes'], Boolean)).toBeTruthy();
});

test('every one of these is a number', () => {
    expect(every([1, 2, 3.2, 4], Number)).toBeTruthy();
});

test('these are not all strings', () => {
    expect(every(["a", "abc", 2, "bgge"], String)).toBeFalsy();
});

test('these are all strings', () => {
    expect(every(["a", "abc", "aaa", "bgge"], String)).toBeTruthy();
});