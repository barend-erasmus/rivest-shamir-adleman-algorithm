//https://www.cs.drexel.edu/~jpopyack/IntroCS/HW/RSAWorksheet.html

function findNthPrimeNumber(n) {

    var i = 0;
    var cnt = 1;
    while (i < n) {
        if (isPrime(cnt)) {
            i++;

        }

        if (i < n) {
            cnt++
        }
    }

    return cnt;
}


function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

function largestPrimeFactor(n) {
    var i = 2;
    while (i <= n) {
        if (n % i == 0) {
            n /= i;
        } else {
            i++;
        }
    }
    return i;
}

var p = findNthPrimeNumber(4);
var q = findNthPrimeNumber(5);

var n = p * q;
var r = (p - 1) * (q - 1);

var k = 0;

for (var i = 0; i < 20; i++) {
    if (!isPrime((r * i) + 1)) {
        k = (r * i) + 1;
    }
}

var factors = [ largestPrimeFactor(k), k / largestPrimeFactor(k)];

var e = factors[0];
var d = factors[1];

var isValid = (e * d) % r == 1; 


var msg = 54;
var encryptedMsg = Math.pow(msg, e) % n;
var decryptedMsg = Math.pow(encryptedMsg, d) % n;

console.log('p = ' + p);
console.log('q = ' + q);
console.log('n = ' + n);
console.log('r = ' + r);
console.log('k = ' + k);
console.log('factors = ' + factors);
console.log('e = ' + e);
console.log('d = ' + d);
console.log('isValid = ' + isValid);

console.log('encryptedMsg = ' + encryptedMsg);
console.log('decryptedMsg = ' + decryptedMsg);
