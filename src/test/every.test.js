import every from '../every.js';

test('', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBeFalsy();
});