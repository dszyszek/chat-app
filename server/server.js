const express = require('express');
const socketio = require('socket.io');

const path = require('path');
const http = require('http');


const port = process.env.port || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use('/', express.static(path.join(__dirname + '/../' + '/public')));


console.log(port);

server.listen(port, () => {
    console.log(`App started on port ${port}`);
});