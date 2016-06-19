function sumFibs(num) {
  
  var sum = 0;
  var sum1 = 1;
  var sum2 = 1;
  
  var sum3 = sum;
  while ( sum2 <= num){
    if (sum2 % 2) {
        sum3 += sum1;
    }
    sum2 = sum + sum1;
    sum1 += sum;
    sum = sum1 - sum;
  }

  return sum3;
}
  


sumFibs(4);