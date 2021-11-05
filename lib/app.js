const express = require('express');

const app = express();

app.use(express.json());

// define an app.use for our site to hit
// app.use('/path/route', require('./controller/controller-name.js'))

app.use(require('./middleware/not-found.js'));
app.use(require('./middleware/error.js'));

module.exports = app;
