import countBy from '../../countBy.js';

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
];

test('', () => {
    expect(countBy(users, value => value.active)).toStrictEqual({ 'true': 2, 'false': 1 });
});

