const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const usersRoutes = require('./api/v1/routes/users');
const redFlagsRoutes = require('./api/v1/routes/red-flags');


app.use(express.static(`${__dirname}/UI`));


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/UI/index.html`);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/red-flags/', redFlagsRoutes);
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
