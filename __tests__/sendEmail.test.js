// import the sendEmail function
const sendEmail = require('../lib/utils/aws-ses/send-email.js');

const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');


describe('tests sendEmail', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('tests for successful sendEmail', async () => {
    const SesResponse = await sendEmail('Hello', 'mikepdxrider@gmail.com');
      
    const expectedResponse = {
      'MessageId': expect.any(String),
      'ResponseMetadata': {
        'RequestId': expect.any(String)
      },
    }; 

    expect(SesResponse).toEqual(expectedResponse);
  });

  
  afterAll(() => {
    pool.end();
  });
});
