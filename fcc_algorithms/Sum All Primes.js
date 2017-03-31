function sumPrimes(num) {
  
  
  var array_add = [];
  var sum =0;
  
 //check if a number is a prime
  
  for (var i=2;i<=num;i++){
    for (var k=2;k<=i;k++){
    
 // if is prime push it to an array
    
  if (i===k){
    
    array_add.push(i);
  
     }  
      //check if it isn't prime and exit the loop
      if (i%k===0){
        break;
      }
    }
  }
  // add the primes
  return array_add.reduce(function(a,b){return a+b;});
  
 }

sumPrimes(10);