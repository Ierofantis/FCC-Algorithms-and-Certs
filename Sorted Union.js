function uniteUnique(arr1,arr2,arr3) {
  
 var args = Array.prototype.slice.call(arguments);
  
  var ex = args.reduce(function(a, b) {
  return a.concat(b);
  });
  
  var results = [];
  
    for (var i = 0; i < ex.length; i++ ) {
    
    var indexValue = ex[i]; 
    
    if (results.indexOf(indexValue) < 0) {
      results.push(indexValue);
    }
  }
  
  return results;
  
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);