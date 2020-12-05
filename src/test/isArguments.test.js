import isArgument from '../isArguments.js';

test('', () => {
    expect(isArguments(function() { return arguments }())).toBeTruthy();
});

test('', () => {
    expect(isArguments([1, 2, 3])).toBeFalsy();
});