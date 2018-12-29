const socket = io();

const form = document.querySelector('.form');
const input_from = document.querySelector('.input_from');
const input_text = document.querySelector('.input_text');
const incoming_messages_box = document.querySelector('.incoming_messages_box');
const btn_remove_history = document.querySelector('.btn_remove_history');

socket.on('connect', () => {
    console.log('Connected to the sever!');

});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (msg) => {
    console.log('Received new message! ', msg);
    incoming_messages_box.innerHTML += `<p>${msg.from}: ${msg.text} At: ${msg.createdAt}</p>`
    
    //   alert(`Got new message!
    //       From: ${msg.from}
    //       Message: ${msg.text}`);
    
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    user = input_from.value;
    text = input_text.value;

    socket.emit('createMessage', {
        from: user,
        text
    });

    clearInpuFields();
});

btn_remove_history.addEventListener('click', e => {
    incoming_messages_box.innerHTML = '';
});

const clearInpuFields = () => {
    input_from.value = '';
    input_text.value = '';
};