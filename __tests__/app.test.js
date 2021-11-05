const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('07-middleware-service-layer routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // test post route
  
  // test get route

  // test put/patch route

  // test delete route

  afterAll(() => {
    pool.end();
  });
});
