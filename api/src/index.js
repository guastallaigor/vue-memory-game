const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, { transports: [ 'websocket', 'polling' ]});

mongoose
  .connect(
    'mongodb://mongo:27017/expressmongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use(function(req, res, next) {
  const allowedOrigins = ['https://vue-memory-game.now.sh', 'http://localhost:8080', 'http://localhost:3000', 'localhost:8080'];
  const origin = req.headers.origin || req.headers['x-forwarded-host'];

  if (allowedOrigins.includes(origin)){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS', 'POST', 'PUT', 'PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  return next();
});

app.use((req, res, next) => {
  req.io = io;

  return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

const port = 3000;
server.listen(port, () => console.log('Server running on port 3000...'));
