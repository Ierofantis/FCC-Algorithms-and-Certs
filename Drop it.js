
function dropElements(arr, func) { 
 
var arr1=arr.length;
 for (var i = 0; i < arr1; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;

  
 // return arr;
  
}
  
  
  


dropElements([1, 2, 3,4], function(n) {return n < 3; });