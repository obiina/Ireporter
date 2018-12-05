const expect = require('chai').expect;
const request = require('request');

it((done) => {
  request('http://localhost:3000', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it((done) => {
  request('http://localhost:3000/reports', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it((done) => {
  request('http://localhost:3000/user', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});


it((done) => {
  request('http://localhost:3000/redFlag', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it((done) => {
  request('http://localhost:3000/profilemore.html', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it((done) => {
  request('http://localhost:3000/more', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it((done) => {
  request('http://localhost:3000/admin', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it((done) => {
  request('http://localhost:3000/admin_log', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it((done) => {
  request('http://localhost:3000/signin', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it((done) => {
  request('http://localhost:3000/signup', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});




