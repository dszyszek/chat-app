const expect = require('expect');

const generateMessage = require('../utils/generateMessage');

describe('generateMessage', () => {

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