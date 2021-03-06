const request = require('supertest');

var app = require("../../server/server").app;

it("should return user json", (done) => {
    var user = {
        name: "Nagaraj",
        age: 27
    };

    request(app)
        .get("/info")
        .expect(200)
        .expect(user)
        .end(done);
});

it('should check if user exists', (done) => {
    var user = {
        name: "Nagaraj",
        age: 27
    };

    request(app)
        .get('/users')
        .expect(200)
        // .expect((res) => {
        //     expect(res.body).toInclude(user);
        // })
        .end(done);
});