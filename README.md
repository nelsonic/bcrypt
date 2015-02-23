# bcrypt

A comparison of JavaScript / Node.js bcrypt implementations.

## Why use *bcrypt*?

The main aim of [***bcrypt***](http://en.wikipedia.org/wiki/Bcrypt)
is to be *computationally* ***slow*** for an attacker to crack
the passwords if (when) your password database is stolen!

bcrypt is an adaptive function: over time, the iteration count
can be increased to make it slower, so it remains resistant to
brute-force search attacks even with increasing computation power.

The cost factor for bcrypt is exponential, or rather,
a cost factor of 10 means 2^10 rounds (1024),
a cost factor of 16 would mean 2^16 rounds (65536).
It's natural then that it would take 5-10 seconds.
It should take about 64 times as long as a cost factor of 10 does.

A detailed overview of why you should use bcrypt can be found here:

+ How To Safely Store A Password:
http://codahale.com/how-to-safely-store-a-password/
+ Use BCrypt Fool!
http://yorickpeterse.com/articles/use-bcrypt-fool/
+ Use Bcrypt. Always.
https://news.ycombinator.com/item?id=2004962

If you are *unconvinced* or paranoid that **bcrypt**
has been *cracked* by the "bad guys", *please* do your own
research and send us your findings!

The purpose of this post is to compare the available node.js
bcrypt modules.

## Which bcrypt node.js module?

As with most things **npm** there are *several* to chose from.

![npm search bcrypt](http://i.imgur.com/LapIFMQ.png)
npm

We are going to ***compare*** the **4** ***most popular*** modules:

+ **bcrypt**: https://www.npmjs.com/package/bcrypt > https://github.com/ncb000gt/node.bcrypt.js/
+ **bcryptjs**: https://www.npmjs.com/package/bcryptjs > https://github.com/dcodeIO/bcrypt.js
+ **bcrypt-nodejs**: https://www.npmjs.com/package/bcrypt-nodejs > https://github.com/shaneGirish/bcrypt-nodejs
+ **twin-bcrypt**: https://www.npmjs.com/package/twin-bcrypt > https://github.com/fpirsch/twin-bcrypt
(twin-bcrypt has a *much* simpler hash and *compair* method)

## FAQ

+ **Q**: The **hash** is ***never*** the **same**, how do I know its *working*?  
**A**: That got me too at first. But you need to remember
that the under the hood its generating a ***dynamic salt***
so it will never *appear* the same.

Try it yourself:

```js
var bcrypt  = require('bcrypt');
var howmany = 10;
var cost    = 12;

for(var i = 1; i <= howmany; i++){
  bcrypt.genSalt(12, function(err, salt) {
    bcrypt.hash("hello", salt, function(err, hash) {
      console.log(hash);
    });
  });
}
```

Output (10 bcrypt hashes) all for the password "hello":

```sh
$2a$12$OgPE9DUNM0KaSodSQVJvw.36GjolssAeO.dfi7a9cmc9KbQTDTj7W
$2a$12$BbJMnIitZhp3tFiwP/XkkeCktZg6dLL/6IaB2rJyHYod/LnroCy1K
$2a$12$9wEav5ce7FDKT3rL7vPLNeLeU6kFtFR/zNRZAxzoxpjroC.S/8FFa
$2a$12$uBCwQKkMJLsy.QA/PXJ3QeLF/yh3v0kFyg1hY9JXEam0SCYWpwrWi
$2a$12$25Xn/4uoeat7l2kTJlnnEu/6ezQ0o6r2Upm9bmFdFiKmvCW6BR5sO
$2a$12$sIAs7K5JuJihDBnR1lfUCOQ.1dvyd5vwQQtFH3RVz/y0c3LtWWHKq
$2a$12$cb9NqlIZvcNdwUbSUfLsC.8u/epdnUdqSFeohO825dCJEDgG6ah6y
$2a$12$NH6DShsNj7tPNXf8r0XXbOYvaJFfEBSCMjpxRfhnK1XOnltfAR6Ia
$2a$12$jhiSa8FFwKkAJbvtZpSMjusDQNXhkdCkE.x1uSBFvwS52AL.7.0d.
$2a$12$sEhB/EyvhfCa0QMsBCUj9.Li69xFYZ8EcWdto4N2zke3q3X/BpCSG
```


But when you use the ***compareSync*** method, it will calculate
the check using the salt in the original hash.

The modular crypt format for bcrypt consists of

+ $2$, $2a$ or $2y$ identifying the hashing algorithm and **format**,
+ a **two digit** value denoting the ***cost*** parameter, followed by $
+ a **53 characters** long base-64-encoded value (they use the alphabet
., /, 0–9, A–Z, a–z that is different to the standard
Base 64 Encoding alphabet) consisting of:
  + **22 characters** of ***salt*** (effectively only 128 bits of the 132 decoded bits)
  + **31 characters** of **encrypted** output (effectively only 184 bits of the 186 decoded bits)

Thus the total length is 59 or 60 bytes respectively.


> See: Explanation of the bcrypt format: http://stackoverflow.com/a/5882472/1148249
