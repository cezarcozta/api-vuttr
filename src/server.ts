import 'reflect-metadata';

import express from 'express';

import './database';

const app = express();

app.post('/tools', (request, response) => {
  response.send({ message: 'ok' });
})

app.listen(3000, () => {
  console.log('Server Started!!!');
});