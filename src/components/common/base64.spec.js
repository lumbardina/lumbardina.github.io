'use strict';
/* jshint esnext: true */

import base64 from './base64';

describe('Base64', () => {
    var username = 'username@maxeler.com',
	encodedUsername = 'dXNlcm5hbWVAbWF4ZWxlci5jb20=';

    it('encodes', () => {
	var output = base64.encode(username);

	expect(output).toEqual(encodedUsername);
    });

    it('decodes', () => {
	var output = base64.decode(encodedUsername);

	expect(output).toEqual(username);
    });

    it('encodes and decodes', () => {
	var encodedOutput = base64.encode(username);
	var decodedOutput = base64.decode(encodedOutput);

	expect(decodedOutput).toEqual(username);
    });
});
