import chunk from '../chunk.js';
const { expect } = require("chai");

test("['a', 'b', 'c', 'd'] should be chunked to [['a', 'b'], ['c', 'd']]", () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.eql([['a', 'b'], ['c', 'd']]);
});

test('', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.eql([['a', 'b', 'c'], ['d']]);
});