function mutation(arr) {


var arr1 = arr[0].toLowerCase();
var arr2 = arr[1].toLowerCase();

  for(var i = 0; i < arr2.length; i++){
    
    var check = arr1.indexOf(arr2[i]);
    
    if (check === -1){
      return false;
    }
  }
  return true;
}


mutation(["hello", "hey"]);