require('dotenv').config();
const express = require('express');
const proxy = require('http-proxy-middleware');

const contact = require('./api/contact');

const app = express();

app.get(
  '*',
  proxy({
    target: 'http://localhost:3000',
  }),
);

app.post('/api/contact', contact);

app.listen(4000);
