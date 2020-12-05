import chunk from '../chunk.js';
const { expect } = require("chai");

test("['a', 'b', 'c', 'd'] with value 2 should be chunked to [['a', 'b'], ['c', 'd']]", () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.eql([['a', 'b'], ['c', 'd']]);
});

test("['a', 'b', 'c', 'd'] with value 3 should be chunked to [['a', 'b', 'c'], ['d']]", () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.eql([['a', 'b', 'c'], ['d']]);
});

test("['a', 'b', 'c', 'd' 'e'] with value 1 should be chunked to [['a'], ['b'], ['c'], ['d'], ['e']]", () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 1)).to.eql([['a'], ['b'], ['c'], ['d'], ['e']]);
});