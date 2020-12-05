import difference from '../difference.js';
import { expect } from 'chai';

test('', () => {
    expect(difference([2, 1], [2, 3])).to.eql([1]);
});
