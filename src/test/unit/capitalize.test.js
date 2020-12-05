const { TestScheduler } = require("jest");
import capitalize from '../../capitalize.js';

test('Capitalizing FRED makes him Fred', () => {
    expect(capitalize('FRED')).toBe('Fred');
});

test('Capitalizing fred makes him Fred', () => {
    expect(capitalize('fred')).toBe('Fred');
})