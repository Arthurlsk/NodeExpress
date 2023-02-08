const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(3000, () => console.log('Server Started at http://localhost:3000'));
