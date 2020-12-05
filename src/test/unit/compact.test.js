import compact from '../../compact.js';
import { expect } from 'chai';

test('Should filter falsy-values', () => {
    expect(compact([0, 1, false, 2, '', 3])).to.eql([1, 2, 3]);
});