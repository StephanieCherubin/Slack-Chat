const express = require('express');
const app = express();
// socket.io has to use the http server
const server = require('http').Server(app);

//Express View Engine for Handlebars
const exphs = require('express-handlebars');
app.engine('handlebars', exphs());
app.set('view engine', 'handlebars');

app.length('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})