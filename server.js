var bcrypt = require('bcrypt');
var http = require('http');

http.createServer(function (req, res) {
  console.log("URL:",req.url);
  bcrypt.genSalt(12, function(err, salt) {
    bcrypt.hash('i', salt, function(err, hash) {
      console.log(hash);
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(JSON.stringify({"hash":hash}));
    });
  });
}).listen(process.env.PORT || 3000);
