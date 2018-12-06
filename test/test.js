const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const expect = chai.expect();
const should = chai.should();
chai.use(chaiHttp);

describe('ireporter test', () => {
  it('It should get all reports', (done) => {
    chai.request(server)
      .get('api/v1/red-flags/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.expect.be.a('object');
        res.body.length.should.be.eql(0);
        done();
      });
  });

  it('Should get all users', (done) => {
    chai.request(server)
      .get('api/v1/users/')
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a('object');
        // res.body.length.should.be.eql(0);
        done();
      });
  });

  it('should get a single user', (done) => {
    chai.request(server)
      .get('api/v1/users/user/')
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a('object');
        // res.body.length.should.be.eql(0);
        done();
      });
  });

  it('It should get a single report', (done) => {
    chai.request(server)
      .get('api/v1/red-flags/')
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a('object');
        // res.body.length.should.be.eql(0);
        done();
      });
  });

  it('Should create a user', (done) => {
    chai.request(server)
      .post('api/v1/users/')
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a('object');
        // res.body.length.should.be.eql(0);
        done();
      });
  });

  it('It should create a redflag', (done) => {
    chai.request(server)
      .post('api/v1/red-flags/')
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a('object');
        // res.body.length.should.be.eql(0);
        done();
      });
  });
});
