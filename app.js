const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/:id', (req, res) => {
    res.send(new Date());
})

const port = 3000;

app.listen(port, () => {
    console.log(`Running in port ${port}`);
});

