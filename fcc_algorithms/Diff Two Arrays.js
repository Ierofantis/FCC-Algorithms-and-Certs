function diff(arr1, arr2) {
  
  var newArr = arr2.concat(arr1);    
      
  function skase(value){
    
    if (arr1.indexOf(value)===-1||arr2.indexOf(value)===-1){
      return value;
    }
    
  }
    
    var filtered = newArr.filter(skase);
    return filtered;
  
}
  


diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
