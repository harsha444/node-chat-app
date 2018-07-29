var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should be correct message object', () => {
        var from = "harsha";
        var text = "Some message";
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});