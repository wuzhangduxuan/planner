const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname,'src/public')));

app.use((req, res) => {
  res.status(404);
  res.send({
    err: 'not found'
  });
});

app.listen(3000);
console.log('server on port 3000');