const generateMessage = (message) => {
    let time = new Date();
        let formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}, ${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;

        let newMessage = {
            from: message.from,
            text: message.text,
            createdAt: formattedTime
        }
        return newMessage
};

module.exports = generateMessage;