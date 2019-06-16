// we need tomload our express module 
//create a constant
const express = require('express');

const app = express();

//link the backend with the clientside
app.use(express.static(__dirname + '/client'));

const port = 4000;

app.listen(port, () => {
    console.log('server is running on port ' + port);
});