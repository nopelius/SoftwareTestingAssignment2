import at from '../../at.js';
import { TestScheduler } from 'jest';

let object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

test('ability to get certain array from an object', () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3, 4]);
});