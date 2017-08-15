const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const UserController = require('./controllers/user');

const port = config.port;
const app = express();

app.use(bodyParser.json());

app.get('/user', (req, res) => {
    UserController.getUsers(req, res);
});

app.post('/user', (req, res) => {
    UserController.addUser(req, res);
});

app.listen(port, () => {
    console.log(`Test server running on port ${port}...`);
});