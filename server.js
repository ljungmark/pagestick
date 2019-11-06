const path = require('path');
const express = require('express');
const app = express();
const port = 4444;

app.use('/scripts', express.static(path.join(__dirname, 'demo/')));
app.use('/dist', express.static(path.join(__dirname, 'dist/')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'demo', 'index.html')));

app.listen(port, _ => console.log(`Pagestick running on port ${port}!`));
