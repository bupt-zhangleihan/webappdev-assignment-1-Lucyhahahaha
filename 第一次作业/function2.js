function isPrime(num) {   
    if (num <= 1) {
    return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
    return false;
    }
    }
    return true;
}
function getPrimes(a) {    
    const primes = [];
    for (let i = 2; i <= a; i++) {
    if (isPrime(i)) {
    primes.push(i);
    }
    }
    return primes;
}
    
console.log(getPrimes())