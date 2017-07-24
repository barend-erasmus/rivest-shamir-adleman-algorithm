# Rivest-Shamir-Adleman Algorithm

RSA is one of the first practical public-key cryptosystems and is widely used for secure data transmission. In such a cryptosystem, the encryption key is public and differs from the decryption key which is kept secret. In RSA, this asymmetry is based on the practical difficulty of factoring the product of two large prime numbers, the factoring problem.

## Example

First calculate 2 prime numbers, namely `p` and `q`.

p = 7

q = 11

From `p` and `q` calculate 2 values, namely `n` and `r`.

n = p * q = 77

r = (p - 1) * (q - 1) = 60

Next find a number equal to `1 % r` which can be factored.

Candidates for `k`: 61, 121, 181, 241, 301, 361, 421, 481, 541, 601, 661, 721, 781, 841, 901, 961, 1021, 1081, 1141, 1201, 1261.

k = 1141

Next find 2 factors of `k`, namely `e` and `d` where `(e * d) % r == 1`.

e = 163 

d = 7

`e` is the public key.

`d` is the private key.

To encrypt a message:

`Math.pow(msg, e) % n`

To Decrypt a message:

`Math.pow(msg, d) % n`