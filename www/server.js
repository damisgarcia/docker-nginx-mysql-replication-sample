'use strict';

const express = require('express');
const { v4 } = require('uuid');

// Constants
const PORT = process.env.SITE_PORT || 8080;
const HOST = process.env.SITE_HOST || '0.0.0.0';

// App
const app = express();
const secret = v4();

app.get('/', (req, res) => {
    const origin = req.headers['origin']
    res.send(`Hello World ${secret} - ${origin}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);