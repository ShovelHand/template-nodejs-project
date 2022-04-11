
const databaseName = 'test'
const app = require("../server");
const mongoose = require('mongoose');
const supertest = require("supertest");
const request = supertest(app);
import sampleModel from '../Models/sampleModel';

it("gets the logging endpoint. Make sure it returns an OK response", async (done) => {
    return request.get("/test/hello").then(data => expect(data).toEqual("Hello world!"));
 
});

//it('works with promises', () => {
//    expect.assertions(1);
//    return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
//});


//describe('User Model Test', () => {

//    beforeAll(async () => {
//        const url = `mongodb://127.0.0.1/${databaseName}`
//        await mongoose.connect(url, { useNewUrlParser: true })
//    });

//    it('A test seeing a commit will work', async (done) => {
//        const res = await request(app).get('/test')
            
//        expect(res.status).toBe(200);
//        done();
//    });
//})