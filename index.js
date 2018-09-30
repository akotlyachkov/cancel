const express = require('express'),
  app = express(),
  http = require('http'),
  server = http.createServer(app);

app.use('/api/req1', (req, res, next) => {
  setTimeout(() => {
    res.send('req1 5000ms done')
  }, 5000)
});

app.use('/api/req2', (req, res, next) => {
  setTimeout(() => {
    res.send('req2 2000ms done')
  }, 2000)
});

app.use('/public', express.static(`${__dirname}/public`));

app.use('/', (req, res, next) => {
  res.sendFile('index.html', {root: `${__dirname}/public`})
});

server.listen(3000, function () {
  console.log(`Тестовое приложение запущено http://localhost:3000`);
});