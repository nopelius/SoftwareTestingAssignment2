import every from '../../every.js';

test('Every one of these is not a boolean', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
});