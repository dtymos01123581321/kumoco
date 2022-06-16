const keys = require('./config/keys');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

console.log(path.join(__dirname, 'build', 'index.html'));
// For react
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = keys.port || 3005;

app.listen(port, () => {
  console.info(`Frontend listening on port ${port}`);
});
