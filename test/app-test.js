const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('app index route', () => {
  it('it should GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('it should POST /login with username:password', (done) => {
    chai.request(app)
      .post('/login')
      .type('form')
      .send({
        username: 'username',
        password: 'password'
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('it should not POST /login with bad username:password', (done) => {
    chai.request(app)
      .post('/login')
      .type('form')
      .send({
        username: 'baduser',
        password: 'badpassword'
      })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('it should handle 404 error', (done) => {
    chai.request(app)
      .get('/notExist')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
