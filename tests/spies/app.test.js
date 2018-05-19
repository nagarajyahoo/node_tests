const expect = require('expect');
const rewire = require('rewire');
const sinon = require('sinon');

var app = rewire('../../spies/app');

describe('Spy Tests', () => {
    var db = {
        saveUser: sinon.spy()
    };

    app.__set__('db', db);

    it('Should call the db save user spy', () => {
        var username = "nmr@1cf.com";
        var password = "nmr@123";

        app.signUp(username, password);
        sinon.assert.calledWith(db.saveUser, {username, password});
    });
});
