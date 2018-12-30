const generateMessage = (message) => {
    let time = new Date();
        let formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}, ${time.getDate()}.${time.getMonth()+1}.${time.getFullYear()}`;

        let newMessage = {
            from: message.from,
            text: message.text,
            createdAt: formattedTime
        }
        return newMessage
};

const generateLocationMessage = (author, locationArray) => {
    let link = `https://www.google.com/maps/?q=${locationArray[0]},${locationArray[1]}`;
    return {
        from: author,
        text: link 
    };
};

module.exports = {
    generateMessage,
    generateLocationMessage
};