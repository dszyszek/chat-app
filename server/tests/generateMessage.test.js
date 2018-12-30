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
        let link = generateLocationMessage('Admin', [52.279986, 17.3522939]);
        
        expect(link.text).toBe('https://www.google.com/maps/?q=52.279986,17.3522939');
    });

});
