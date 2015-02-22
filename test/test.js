var bcrypt   = require('bcrypt');
var bcryptjs = require('bcryptjs');

bcrypt.genSalt(12, function(err, salt) {
  bcrypt.hash("hello", salt, function(err, jshash) {
    console.log(bcrypt.compareSync("hello", jshash)); // true
  });
});

bcrypt.genSalt(12, function(err, salt) {
  bcrypt.hash('hello', salt, function(err, hash) {
    bcrypt.genSalt(12, function(err, salt) {
      bcrypt.hash('hello', salt, function(err, hash2) {
        console.log(hash);
        console.log(hash2);
        console.log(bcrypt.compareSync("hello", hash)); // true
        console.log(bcrypt.compareSync("hello", hash2)); // true
      });
    });
  });
});
