const express = require('express');
const app = express();

const port = process.env.port || 3000;
app.listen(port, function () {
    console.log(`Server Listening on port ${port}!`);
})

app.use(express.json());

let messages = [];

app.get('/', (req, res) => {
    res.send("Connection Success");
})

app.get('/message', (req, res) => {
    res.json(messages);
})

app.post('/message', (req, res) => {
    try {
        const data = req.body;
        messages.push(data);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).send(err);
    }
})