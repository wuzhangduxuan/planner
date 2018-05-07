const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname,'src/public')));

let data = {
  items: [
    {
      title: 'css入门',
      desc: '当前阶段：4（未完成）'
    },
    {
      title: 'js入门',
      desc: '当前阶段：3（未完成）'
    },
    {
      title: 'html入门',
      desc: '当前阶段：5（完成）'
    },
    {
      title: '精通css',
      desc: '当前阶段：10（完成）'
    }
  ]
}

app.get('/main', (req, res) => {
  res.send(data);
});

app.use((req, res) => {
  res.status(404);
  res.send({
    err: 'not found'
  });
});

app.listen(3000);
console.log('server on port 3000');