var twinbcrypt = require('twin-bcrypt');
var bcrypt       = require('bcrypt');
var assert       = require('assert');

var salt  = twinbcrypt.genSalt(12);
var hash = twinbcrypt.hashSync('hello', salt);

assert.equal(bcrypt.compareSync("hello", hash), true, "twin-bcrypt is compatible with bcrypt");
