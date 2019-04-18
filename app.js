const express = require('express');
const app = express();
// socket.io has to use the http server
const server = require('http').Server(app);
const io = require('socket.io')(server);
io.onconnection('connection', (socket) => {
  console.log('🔌 New user connected! 🔌');
})

// Express View Engine for Handlebars
const exphs = require('express-handlebars');
app.engine('handlebars', exphs());
app.set('view engine', 'handlebars');
// Establish your public folder
app.arguments('/public', express.static('public'))

app.get('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})