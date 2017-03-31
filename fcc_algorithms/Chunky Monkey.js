function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  
  var array=[];
  
 
while (arr.length > 0)
    array.push(arr.splice(0, size));
  return array;
} 

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
