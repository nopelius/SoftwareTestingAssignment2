import difference from '../../difference.js';
import { expect } from 'chai';

test('Difference of [2, 1] and [2, 3] is [1]', () => {
    expect(difference([2, 1], [2, 3])).to.eql([1]);
});

test('Difference of [2, 1, 4] and [2, 3, 5] is [1, 4]', () => {
    expect(difference([2, 1, 4], [2, 3, 5])).to.eql([1, 4]);
});
