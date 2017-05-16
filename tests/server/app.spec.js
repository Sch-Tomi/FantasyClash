const App = require('../../server/app')
const supertest = require('supertest')
const expect = require('chai').expect

describe('Server App', () => {
    let request
    let app
    let server

    beforeEach(() => {
        app = App.create()
        server = app.listen()
        request = supertest.agent(app._app)
    })

    afterEach(function() {
        server.close()
    });


    context('POST /', () => {
        it('empty given params should return with an error json', async () => {
            let result = await request.post('/')
            expect(result.statusCode).to.eql(200)
            expect(result.res.text).to.eql('{"error":"Missing Hero"}')
        })

        it('should save given hero', async () => {
            let result = await request.post('/')
                        .send({ type: 'warrior', hp: 30, weapon: 'sword' })
                        .set('Accept', 'application/json');
            expect(result.statusCode).to.eql(200)
            expect(result.res.text).to.eql('{"id":1}')
        })

    })

    context('GET /', () => {
        it('should return with an heroes object', async () => {
            await request.post('/')
                        .send({ type: 'warrior', hp: 30, weapon: 'sword' })
                        .set('Accept', 'application/json');

            let result = await request.get('/')
            expect(result.statusCode).to.eql(200)
            expect(result.res.text).to.eql('[{"type":"warrior","hp":30,"weapon":"Sword","id":1}]')
        })

    })
})
