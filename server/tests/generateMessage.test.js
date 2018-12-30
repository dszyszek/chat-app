const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('../utils/generateMessage');

describe('TEST generateMessage', () => {

    it('Should return generated message', () => {
        let newMessage = generateMessage({
            from: 'example',
            text: 'Lorem ipsum'
        });

        expect(newMessage).toHaveProperty('from', 'example');
        expect(newMessage).toHaveProperty('text', 'Lorem ipsum');
        expect(typeof newMessage.createdAt).toBe('string');

    });

});

describe('TEST generateLocationMessage', () => {

    it('Should return proper link to google maps', () => {
        let link = generateLocationMessage('Admin', [11, 11]);
        
        expect(link.text).toBe('https://www.google.com/maps/?q=11,11');
    });

});
