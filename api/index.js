const serverless = require('serverless-http');
const app = require('../app'); // Import your Express app

module.exports = serverless(app);
