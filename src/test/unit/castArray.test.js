import castArray from '../../castArray.js';
let expect = require('chai').expect;

test('1 should transform to an array with one', () => {
    expect(castArray(1)).to.be.a('array');
    expect(castArray(1)[0]).to.equal(1);
    expect(castArray(1).length).to.equal(1);
});

test('{ a: 1 } results in [{ a: 1 }]', () => {
    expect(castArray({ 'a': 1 })).to.eql([{ 'a': 1 }]);
});

test('abc string results in [abc]', () => {
    expect(castArray('abc')).to.eql(['abc']);
});

test('null results in [null]', () => {
    expect(castArray(null)).to.eql([null]);
});

test('undefined results in [undefined]', () => {
    expect(castArray(undefined)).to.eql([undefined]);
});

test('no parameter results in []', () => {
    expect(castArray()).to.eql([]);
});

test('[1, 2, 3] results in [1, 2, 3]', () => {
    expect(castArray([1, 2, 3])).to.eql([1,2,3]);

});

