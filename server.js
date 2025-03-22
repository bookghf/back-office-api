const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req, res) => {
    res.status(200).send({message: 'Hello form Express'});
});

app.get('/test',(req, res) => {
    res.status(200).send({message: 'This is Test form Express'});
});

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});