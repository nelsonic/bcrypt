var bcrypt = require('bcrypt');
var pass = {};
var limit = 10;
var j = 0;
var st = new Date().getTime();
for(var i = 1; i <= limit; i++){
  bcrypt.genSalt(12, function(err, salt) {

    bcrypt.hash('hello', salt, function(err, hash) {
      // Store hash in your password DB.
      console.log(hash);
      var et = new Date().getTime();
      var took = et - st;
      pass[++j] = took + 'ms';
      // console.log("Time to hash: "+took +"ms | " + j);
      console.log(hash);
      if(j === limit) {
        console.log(" - - - - - RESULTS - - - - - ");
        console.dir(pass);
      }
    });
  });

}
