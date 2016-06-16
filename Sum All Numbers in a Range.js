function sumAll(arr) {
  
 var sum = 0;
var first, last;
if (arr[0] > arr[1]) {
  for (var i = arr[0]; i >= arr[1]; i-- ) {
    sum += i;
}
return sum;

}
else {
  for (var j = arr[0]; j <= arr[1]; j++ ) {
    sum += j;
}
return sum;

}
}


sumAll([4, 1]);