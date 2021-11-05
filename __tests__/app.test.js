const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('07-middleware-service-layer routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // test post matches getById route 
  it('matches a post request body to a getById response body', async () => {
    // declare a new object variable.

    // await a post request to </route>
    //  - attach a send(newObjVar)

    // declare a new variable to save an async get request to </route/:id>

    // expect getbyIdResponse to equal the new object with an id: expect.any(String)
  });

  // test getAll route

  // test put/patch route

  // test delete route

  afterAll(() => {
    pool.end();
  });
});
