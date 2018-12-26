const express = require('express');
const socketio = require('socket.io');

const path = require('path');
const http = require('http');


const port = process.env.port || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use('/', express.static(path.join(__dirname + '/../' + '/public')));

io.on('connection', (soc) => {
    console.log('Conncetion established');

    soc.on('disconnect', (dis) => {
        console.log('User was disconnected');
    });
});


console.log(port);

server.listen(port, () => {
    console.log(`App started on port ${port}`);
});