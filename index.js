const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/get', (req, res) => {
    res.send('{ "message": "Hello World" }');
});


app.listen(3001, () => console.log("server is running on port 3001"))