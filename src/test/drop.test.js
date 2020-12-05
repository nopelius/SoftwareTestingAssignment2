import drop from '../drop.js';
import { expect } from 'chai';

test('', () => {
    expect(drop([1, 2, 3])).to.eql([2, 3]);
});

test('', () => {
    expect(drop([1, 2, 3], 2)).to.eql([3]);
});

test('', () => {
    expect(drop([1, 2, 3], 5)).to.eql([]);
});

test('', () => {
    expect(drop([1, 2, 3], 0)).to.eql([1, 2, 3]);
});