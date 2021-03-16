const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
//const io = socketIo.listen(server);

var total = 0;
var clients = {};

server.listen(3000,()=>{
  console.log("Rodando");
});

app.use(express.static(__dirname + "/public"));

io.on('connection', (socket)=>{
  var handshakeData = socket.request;
  clients[socket.id] = handshakeData._query['name'];

  console.log('A new Player connected: '+clients[socket.id]+'. ID '+socket.id);

  console.log(clients);

  io.sockets.emit('clean');
  io.sockets.emit('broadcast',{ nome: clients[socket.id]});

  socket.on('disconnect', function(){
    console.log(clients[socket.id]+' has disconnected from the game. ID '+socket.id);
    delete clients[socket.id];
  });
});

// io.use((socket,next)=>{
//   var handshakeData = socket.request;
//   clients[socket.id] = handshakeData._query['name'];

//   console.log('A new Player connected: '+clients[socket.id]+'. ID '+socket.id);

//   console.log(clients);

//   io.sockets.emit('clean');
//   io.sockets.emit('broadcast',{ nome: clients[socket.id]});

//   socket.on('disconnect', function(){
//     console.log(clients[socket.id]+' has disconnected from the game. ID '+socket.id);
//     delete clients[socket.id];
//   });
//   next();
// });