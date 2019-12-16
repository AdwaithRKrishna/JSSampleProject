var chai = require('chai')
var chaiHttp = require('chai-http')
const chaiExclude = require('chai-exclude')
var app = require('../../app')
var expect = chai.expect
var assert = require('assert')
chai.use(chaiHttp)
chai.use(chaiExclude)
const truncate = require('../helpers/truncate')
const companyFactory = require('../factories/company')

describe('Company Integration Test', function () {
  var authenticationToken
  before(function (done) {
    chai
      .request(app)
      .post('/user/login')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ password: 'password', username: 'admin' })
      .end(function (err, res) {
        authenticationToken = res.body.token
        done()
      })
  })

  after(function () {})

  describe('Company Read Test by generating a company', function () {
    var company
    beforeEach(async function () {
      truncate()
      company = await companyFactory()
    })

    it('Read Company', function () {
      chai
        .request(app)
        .get(`/companies/${company.id}`)
        .set('x-access-token', authenticationToken)
        .end(function (err, res) {
          expect(res.statusCode).to.equal(200)
          expect(res.body.type).to.be.equal('success')
          expect(res.body.message).to.be.equal('Company Found')
          expect(res.body.data.company)
            .to.be.an('object')
            .excluding(['createdAt', 'updatedAt'])
            .that.deep.equal(company.toJSON())
        })
    })

    it('Read Company with Non Exsisting ID', function () {
      chai
        .request(app)
        .get('/companies/0')
        .set('x-access-token', authenticationToken)
        .end(function (err, res) {
          expect(res.statusCode).to.equal(200)
          expect(res.body.type).to.be.equal('success')
          expect(res.body.message).to.be.equal('Company Found')
          expect(res.body.data.company)
            .to.be.an('object')
            .excluding(['createdAt', 'updatedAt'])
            .that.deep.equal(company.toJSON())
        })
    })
  })
})
