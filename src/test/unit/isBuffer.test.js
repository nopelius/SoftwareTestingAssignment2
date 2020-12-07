import isBuffer from'../../isBuffer.js';

test('new Buffer(2) is a buffer', () => {
    expect(isBuffer(new Buffer(2))).toBe(true);
});

test('new Uint8Array(2) is not a buffer', () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false);
});