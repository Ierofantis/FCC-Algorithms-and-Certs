function factorialize(num) {

 var f = num;
  
    if (num === 0) {
        return 1;
    }
    while (num-- > 2) {
        f *= num;
    }
    return f;  
  
  
} 
  


factorialize(5);