let socket = io();

socket.on('connect', () => {
    console.log('Connected to the sever!');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});