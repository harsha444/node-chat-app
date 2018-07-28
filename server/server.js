var path = require('path');
var http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () =>{
        console.log('Disconnected from the client');
    });
});

server.listen(3000, () => {
    console.log(`app is up on ${port}`);  
});