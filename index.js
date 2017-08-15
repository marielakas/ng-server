const express = require('express');
const config = require('./config');

const port = config.port;
const app = express();

app.get('/api', (req, res) => {
    const response = ['test', 'test2'];
    res.send(response);
});

app.listen(port, () => {
    console.log(`Test server running on port ${port}...`);
});