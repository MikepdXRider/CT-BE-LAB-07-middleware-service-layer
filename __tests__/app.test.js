// import ModelClass

// import the sendEmail function
const sendEmail = require('../lib/utils/aws-ses/send-email.js');
// reassign the function to jest.fn();

const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
// const request = require('supertest');
// const app = require('../lib/app.js');

describe('07-middleware-service-layer routes', () => {
  beforeEach(() => {
    // clear the mock call value before each test

    return setup(pool);
  });

  // // test post matches getById route 
  // it('matches a post request body to a getById response body & sends an email', async () => {
  //   // declare a new object variable.

  //   // await a post request to </route>
  //   //  - attach a send(newObjVar)

  //   // declare a new variable to save an async get request to </route/:id>

  //   // expect getbyIdResponse to equal the new object with an id: expect.any(String)
  //   // expect sendEmail to have been called once.
  // });


  it('tests ses send attempt', async () => {
    const sesResponse = await sendEmail('Hello', 'mikepdxrider@gmail.com');
      
    expect(sesResponse).toEqual({});
  }, 10000);


  // test getAll route

  // test put/patch route

  // test delete route

  
  afterAll(() => {
    pool.end();
  });
});
