import isDate from'../../isDate.js';

test('new Date is a Date', () => {
    expect(isDate(new Date).toBeTruthy());
});

test('string Mon April 23 2012 is not a Date', () => {
    expect(isDate('Mon April 23 2012').toBeFalsy());
});