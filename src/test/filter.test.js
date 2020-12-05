import filter from '../filter.js';

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
];

test('', () => {
    expect(filter(users, ({ active }) => active)).to.eql(['barney']);
});
