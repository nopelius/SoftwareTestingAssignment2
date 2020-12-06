import drop from '../../drop.js';
import { expect } from 'chai';

test('dropped [1,2,3] should be [2, 3]', () => {
    expect(drop([1, 2, 3])).to.eql([2, 3]);
});

test('2 dropped [1,2,3] should be [3]', () => {
    expect(drop([1, 2, 3], 2)).to.eql([3]);
});

test('5 dropped [1,2,3] should be []', () => {
    expect(drop([1, 2, 3], 5)).to.eql([]);
});

test('0 dropped [1,2,3] should have no drops', () => {
    expect(drop([1, 2, 3], 0)).to.eql([1, 2, 3]);
});