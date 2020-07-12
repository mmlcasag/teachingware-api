'use strict';

import express from 'express';
import bodyParser  from 'body-parser';

const app = express();

// setting up body-parser
app.get(bodyParser.json());

// Routes
app.get('/*', (req, res) => {
  res.send(`Request received - Method: ${req.method} - Path: ${req.path}`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;