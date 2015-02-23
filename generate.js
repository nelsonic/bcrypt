var bcrypt  = require('bcrypt');
var howmany = 10;
var cost    = 12;

for(var i = 1; i <= howmany; i++){
  bcrypt.genSalt(12, function(err, salt) {
    bcrypt.hash('hello', salt, function(err, hash) {
      console.log(hash);
    });
  });
}
