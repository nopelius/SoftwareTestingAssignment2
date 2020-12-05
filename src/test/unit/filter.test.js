import filter from '../../filter.js';
import { expect } from 'chai';

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
];


const moreUsers = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false },
    { 'user': 'lisa', 'active': true }
];

const moreActiveUsers = [
    { 'user': 'barney', 'active': true },
    { 'user': 'lisa', 'active': true }
];

test('', () => {
    expect(filter(users, ({ active }) => active)).to.eql([{ 'user': 'barney', 'active': true }]);
});

test('', () => {
    expect(filter(moreUsers, ({ active }) => active)).to.eql(moreActiveUsers);
});
