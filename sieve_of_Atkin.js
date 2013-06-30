var sieve_of_Atkin = function(limit){
  var is_prime = {};
  var square_limit = Math.sqrt(limit) | 0;

  for(var index = 0; index <= limit; index ++){
    is_prime[index] = false;
  }

  is_prime[2] = true;
  is_prime[3] = true;

  var x2 = 0;
  var y2 = 0;
  var n = 0;
  for (var i = 1; i <= square_limit; i++) {
    // x2 = i * i;
    x2 += 2 * i - 1;
    y2 = 0;

    for (var j = 1; j <= square_limit; j++) {
      // y2 = j * j;
      y2 += 2 * j - 1;
        
      n = 4 * x2 + y2;
      if ((n <= limit) && (n % 12 == 1 || n % 12 == 5)){
        is_prime[n] = !is_prime[n];
      }
      
      // n = 3 * x2 + y2; 
      n -= x2;
      if ((n <= limit) && (n % 12 == 7)){
        is_prime[n] = !is_prime[n];
      }
      
      // n = 3 * x2 - y2;
      n -= 2 * y2;
      if ((i > j) && (n <= limit) && (n % 12 == 11)){
        is_prime[n] = !is_prime[n];
      }  
    }
  }

  for (var i = 5; i <= square_limit; i++) {
    if (is_prime[i]) {
      n = i * i;
      for (var j = n; j <= limit; j += n) {
        is_prime[j] = false;
      }
    }
  }

  var primes = [];
  for (var index = 0; index <= limit; index ++){
    if(is_prime[index]){
      primes.push(index);
    }
  }
  return primes;
};