# bcrypt

A comparison of JavaScript / Node.js bcrypt implementations.

## Why use *bcrypt*?

The main aim of [***bcrypt***](http://en.wikipedia.org/wiki/Bcrypt)
is to be computationally ***slow*** for an attacker to crack
your password database if (when) your password database is stolen!

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

![npm search bcrypt](http://i.imgur.com/LapIFMQ.png)
