function getIndexToIns(arr, num) {
 

 var count=0;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      count++;
    }
  }
  return count;

}

getIndexToIns([5, 3,20,3], 5);