const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect
chai.use(chaiHttp)

const app = require('../src/app')
const url = '/api/v1/billing-cycles'

//console.log(`TESTS RUNNING ON ${process.env.NODE_ENV} MODE`)

describe('api', () => {
    context('#GET /api/v1/billing-cycles', () => {
         it('should return status code 200', done => {
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200)
                    done()
                })
        }) 

        it('should return []', done => {
            chai.request(app)
                .get('/api/v1/billing-cycles')
                .end((err, res) => {
                    expect(res.body.length).to.equals(4)
                    done()
                })
        })
    })
})