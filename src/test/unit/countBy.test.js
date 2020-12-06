import countBy from '../../countBy.js';

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
];

test('Should understand that two users are active and one is not', () => {
    expect(countBy(users, value => value.active)).toStrictEqual({ 'true': 2, 'false': 1 });
});

