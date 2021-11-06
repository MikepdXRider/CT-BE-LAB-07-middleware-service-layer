// Allows us to access process.env
require('dotenv').config();

module.exports = {
  apiVersion: '2010-12-01',
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY_ID,
  region: process.env.AWS_SES_REGION
};
