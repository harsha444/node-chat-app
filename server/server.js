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
    
    socket.emit('newMessage', {
        from: 'John',
        text: 'Well, see you then',
        createdAt: 1231411
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () =>{
        console.log('Disconnected from the client');
    });
});

server.listen(3000, () => {
    console.log(`app is up on ${port}`);  
});