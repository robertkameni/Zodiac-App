// we need tomload our express module 
//create a constant
const express = require('express');

const app = express();

app.use(express.st)

const port = 4000;

app.listen(port, () => {
    console.log('server is running on port ' + port);
});