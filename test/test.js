var expect  = require('chai').expect;
var request = require('request');

it(function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/reports' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/profile' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/redFlag' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/profilemore.html' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/more' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/admin' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/admin_log' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/signin' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it(function(done) {
    request('http://localhost:3000/signup' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});




