function largestOfFour(arr) {
 // You can do this!
  var newArray=[];
  for(i=0;i<arr.length;i++){
    newArray.push(Math.max.apply(Math,arr[i]));

  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);