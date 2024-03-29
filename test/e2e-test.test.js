const chai = require('chai')
// Plugin
const chaiHttp = require('chai-http')


chai.use(chaiHttp)


// Necesitamos acceso a nuestro backend
const app = require('../app').app


describe('Suite de prueba e2e para el curso', () => {
    it('should return hello world', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                console.log('A')
                chai.assert.equal(res.text, "Hello World")
                done();
            });
        console.log('B')
    })
})