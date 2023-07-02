const express = require('express');


const app = express();

//GET, POST, PUT, DELETE


app.get('/', (req, res) => {
    return res.json('hello')
});

app.listen(3333);

