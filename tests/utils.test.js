const utils = require('../utils/utils');
const expect = require('expect');

it('should add 2 numbers', function () {
    var res = utils.add(22, 33);
    // expect(res).toBeA('number');
    expect(res).toBe(55);
});

it('should square number', function () {
    var res = utils.square(2);
    expect(res).toEqual(4);
});

it('Random test', () => {
    var some = {
        name: "Nagaraj",
        age: 34,
        desc: "some description"
    };

    expect(some).toMatchObject({
        age: 34
    });
});

it('Splitting and setting name', () => {
    var user = {
        firstName: "Nagaraj",
        middleName: "Muktenahalli",
        lastName: "Rudrappa"
    };

    utils.setName(user, "lastName, firstName");

    expect(user).toMatchObject({
        lastName: "lastName",
        firstName: "firstName"
    });
});

it('Testing async add', (done) => {
    utils.asyncAdd(2, 3, (res) => {
        expect(res).toEqual(5);
        done();
    })
});
