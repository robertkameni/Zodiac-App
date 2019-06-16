// we need tomload our express module 
//create a constant
const express = require('express');

const app = express();

//link the backend server with the clientside folder
app.use(express.static(__dirname + '/client'));

//  Setup Environment variable
const port = process.env.P

app.listen(port, () => {
    console.log('server is running on port ' + port);
});