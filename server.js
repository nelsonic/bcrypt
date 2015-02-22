var bcrypt = require('bcrypt');
var http = require('http');

http.createServer(function (req, res) {
  console.log("URL:",req.url);
  bcrypt.genSalt(12, function(err, salt) {
    bcrypt.hash('hello', salt, function(err, hash) {
      bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash('hello', salt, function(err, hash2) {
          console.log(hash);
          console.log(hash2);
          console.log(bcrypt.compareSync("hello", hash)); // true
          console.log(bcrypt.compareSync("hello", hash2)); // true
          res.writeHead(200, {'Content-Type': 'application/javascript'});
          res.end(JSON.stringify({"hash":hash, "hash2":hash2}));
        });
      });
    });
  });
}).listen(process.env.PORT || 3000);
