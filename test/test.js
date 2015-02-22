var test     = require('tape');
var bcrypt   = require('bcrypt');
var bcryptjs = require('bcryptjs');
var bcryptno = require('bcrypt-nodejs');
var bcrypttw = require('twin-bcrypt');

test("bcrypt sets the benchmark (C++)", function(t){
  bcrypt.genSalt(12, function(err, salt) {
    bcrypt.hash('hello', salt, function(err, hash) {
      t.true(bcrypt.compareSync("hello", hash), "bcrypt works on CI");
      t.end();
    });
  });
});

// https://www.npmjs.com/package/bcryptjs
test("bcryptjs is compatible with bcrypt", function(t){
  bcryptjs.genSalt(12, function(err, salt) {
    bcryptjs.hash('hello', salt, function(err, hash) {
      // use bcrypt to compair hashes are compatible
      t.true(bcrypt.compareSync("hello", hash), "bcryptjs compatible");
      t.end();
    });
  });
});

// https://www.npmjs.com/package/bcrypt-nodejs
test("bcrypt-nodejs is compatible with bcrypt", function(t){
  bcryptno.genSalt(12, function(err, salt) {
    bcryptno.hash('hello', salt, null, function(err, hash) {
      // use bcrypt to compair hashes are compatible
      t.true(bcrypt.compareSync("hello", hash), "bcryptjs compatible");
      t.end();
    });
  });
});

// https://www.npmjs.com/package/twin-bcrypt
test("twin-bcrypt is compatible with bcrypt", function(t){
  var salt = bcrypttw.genSalt(12);
  console.log("SALT >> "+salt);
  bcrypttw.hash("hello", salt, function(hash) {
    console.log(hash);
    t.false(bcrypt.compareSync("hello", hash), "twin-bcrypt NOT compatible");
    t.end();
  });
  // });

});

// bcrypt.genSalt(12, function(err, salt) {
//   bcrypt.hash('hello', salt, function(err, hash) {
//     bcrypt.genSalt(12, function(err, salt) {
//       bcrypt.hash('hello', salt, function(err, hash2) {
//         // console.log(hash);
//         // console.log(hash2);
//         // console.log(bcrypt.compareSync("hello", hash)); // true
//         // console.log(bcrypt.compareSync("hello", hash2)); // true
//       });
//     });
//   });
// });
