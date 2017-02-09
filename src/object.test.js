const object = require('./object');

test('test object argument', () => {
    expect(object).toEqual({"one": 1, "two": 2});
});
