import isArguments from '../../isArguments.js';

test('These are arguments', () => {
    expect(isArguments(function() { return arguments }())).toBeTruthy();
});

test('These are not', () => {
    expect(isArguments([1, 2, 3])).toBeFalsy();
});