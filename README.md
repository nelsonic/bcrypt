# bcrypt

A comparison of JavaScript / Node.js bcrypt implementations.

## Why use *bcrypt*?

The main aim of [***bcrypt***](http://en.wikipedia.org/wiki/Bcrypt)
is to be *computationally* ***slow*** for an attacker to crack
the passwords if (when) your password database is stolen!

bcrypt is an adaptive function: over time, the iteration count
can be increased to make it slower, so it remains resistant to
brute-force search attacks even with increasing computation power.

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

We are going to compare the 4 most popular ones:

+ **bcrypt**: https://www.npmjs.com/package/bcrypt > https://github.com/ncb000gt/node.bcrypt.js/
+ **bcryptjs**: https://github.com/dcodeIO/bcrypt.js
+ **bcrypt-nodejs**: https://www.npmjs.com/package/bcrypt-nodejs > https://github.com/shaneGirish/bcrypt-nodejs

## FAQ

+ **Q**: The **hash** is ***never*** the **same**, how do I know its *working*?  
**A**: That got me too at first. But you need to remember
that the under the hood its generating a ***dynamic salt***
so it will never *appear* the same.
But when you use the ***compareSync*** method, it will calculate
the check using the salt in the original hash.
