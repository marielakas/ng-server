const express = require('express');

const port = 4301;
const app = express();

app.get('/api', (req, res) => {
    const response = ['test', 'test2'];
    res.send(response);
});

app.listen(port, () => {
    console.log(`Test server running on port ${port}...`);
});