const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

app.get('/',(req, res) => {
    res.status(200).send({message: 'Hello form Express'});
});

app.get('/test',(req, res) => {
    res.status(200).send({message: 'This is Test form Express'});
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });