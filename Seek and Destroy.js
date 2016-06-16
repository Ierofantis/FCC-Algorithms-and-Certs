function destroyer(arr) {


 var args = Array.prototype.slice.call(arguments); 

  function check(i) {
    
    return args.indexOf(i,1)==-1;
  
}    
  
  var filtered = arr.filter(check);
  return filtered;
}



  
  
  

destroyer([1, 2, 3, 1, 2, 3,7], 2, 3);
