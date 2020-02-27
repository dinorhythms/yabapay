const config = require('./config');

const { expect, chai, messages, test, api } = config;

describe('Index.js', () => {
  
	before(() => {
		
  });

	after(() => {
    test.cleanup();
  });
  
  it('Should load index successfully', (done) => {
    chai.request(api).get('/').end((_, res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body.status).to.be.equal('success');
      expect(res.body.data).to.be.an('object');
      expect(res.body.data.message).to.be.equal(messages.welcome);
      done();
    })
  })

  it('should load api root successfully', (done) => {
    chai.request(api).get('/v1').end((_, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.status).to.be.equal('success');
      expect(res.body.data).to.be.an('object');
      expect(res.body.data.message).to.be.equal(messages.apiV1Welcome);
      done()
    })
  })

  it('should return 404 if route not found', (done) => {
    chai.request(api).get('/api/v1/home').end((_, res) => {
        expect(res.status).to.be.equal(404);
        expect(res.body.status).to.be.equal('error');
        expect(res.body.error).to.be.an('object');
        expect(res.body.error.message).to.be.equal(messages.notFound);
        done();
      });
  });

})
