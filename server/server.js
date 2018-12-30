// url: https://intense-temple-63546.herokuapp.com/

const express = require('express');
const socketio = require('socket.io');

const path = require('path');
const http = require('http');

const generateMessage = require('./utils/generateMessage');

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use('/', express.static(path.join(__dirname + '/../' + '/public')));

io.on('connection', (soc) => {
    console.log('Conncetion established');

    soc.emit('newMessage', generateMessage({
        from: 'Admin',
        text: 'Welcome to the chat!'
    }));

    soc.broadcast.emit('newMessage', generateMessage({
        from: 'Admin',
        text: 'New user joined chat!'
    }));

    soc.on('disconnect', (dis) => {
        console.log('User was disconnected');
    });

    soc.on('createMessage', (message) => {
        newMessage = generateMessage(message);

        io.emit('newMessage', newMessage);
    });

    soc.on('shareLocation', loc => {
       let coordsMessage = generateMessage({
            from: 'Admin',
            text: `Location: ${loc.latitude}, ${loc.longitude}`
        });
        io.emit('newMessage', coordsMessage);
    });
});




console.log(port);

server.listen(port, () => {
    console.log(`App started on port ${port}`);
});