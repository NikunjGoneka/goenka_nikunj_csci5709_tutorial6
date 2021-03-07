const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const userRoute = require('./api/routes/userRoute');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoute);

const server = http.createServer(app);

server.listen(port);

