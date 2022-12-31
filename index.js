const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());

// Mount the users router on the /users path
app.use('/users', usersRouter);

app.listen(3000, () => console.log('Listening on port 3000'));

module.exports = app;