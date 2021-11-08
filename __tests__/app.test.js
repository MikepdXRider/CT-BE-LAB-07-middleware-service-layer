// import ModelClass

// import the sendEmail function
const sendEmail = jest.fn();
// reassign the function to jest.fn();


const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
// const sendEmail = require('../lib/utils/aws-ses/send-email.js');

describe('07-middleware-service-layer routes', () => {
  beforeEach(() => {
    // clear the mock call value before each test

    return setup(pool);
  });

  // test post matches getById route 
  // it('matches a post request body to a getById response body & sends an email', async () => {
  //   // declare a new object variable.
  //   const newOrderObj = { quantity: 10, userEmail: 'mikepdxrider@gmail.com' };

  //   // await a post request to </route>
  //   const postResponse = await request(app).post('/spoons')
  //   //  - attach a send(newObjVar)
  //     .send(newOrderObj);

  //   // declare a new variable to save an async get request to </route/:id>
  //   const getbyIdResponse = await request(app).get(`/spoons/${postResponse.body.id}`);

  //   // expect getbyIdResponse to equal the new object with an id: expect.any(String)
  //   // expect sendEmail to have been called once.
  // });


  it.only('tests ses send attempt', async () => {
    await sendEmail('Hello', 'mikepdxrider@gmail.com');

    // const expectedRes = {
    //   'MessageId': expect.any(String),
    //   'ResponseMetadata': {
    //     'RequestId': expect.any(String),
    //   },
    // };
      
    expect(sendEmail).toHaveBeenCalledTimes(1);
  }, 10000);


  // test getAll route

  // test put/patch route

  // test delete route

  
  afterAll(() => {
    pool.end();
  });
});
