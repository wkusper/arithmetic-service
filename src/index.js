const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello world!');
 });

 app.get('/add/:n/:m', (req, res) => {
    const n = Number(req.params.n);
    const m = Number(req.params.m);
    res.json(n + m);
});

app.listen(port);

