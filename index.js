// require('dotenv').config();
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.statusCode(200);
    res.send('Hello World!');
});

app.get('/profile', (req, res) => {
    res.send("hey my name is vishwas this is get request for /profile");
});

app.get('/login', (req, res) => {
    res.send(`<h1>login on this account</h1>
        <input type="text"/>
    `);
});

app.listen(port, () => { // using the dotenv
    console.log(`Example app listening on port ${process.env.PORT}`);
    // process.exit(0);
});