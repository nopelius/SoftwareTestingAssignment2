import isTypedArray from'../../isTypedArray.js';

test('new Uint8Array is a typed array', () => {
    expect(isTypedArray(new Uint8Array)).toBe(true);
});

test('[] is not a typed array', () => {
    expect(isTypedArray([])).toBe(false);
});