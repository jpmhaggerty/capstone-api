const express = require('express');
const cors = require('cors');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Express World!');
});

module.exports = app;
