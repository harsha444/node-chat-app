var socket = io();

socket.on('connect', function(){
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'Andrew',
        text: "Yup, that works for me!"
    });
});

socket.on('disconnect', function(){
    console.log('disconnected from the server');
});

socket.on('newMessage', function(message){
    console.log('message: ', message)
});