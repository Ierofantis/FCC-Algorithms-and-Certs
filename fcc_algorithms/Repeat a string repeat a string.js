function repeat(str, num) {
  

    var array = [];
  


    for(var j = 0; j <= num; j++)
        array[j-1] = str;
  


  return array.join('');
  
}

repeat("x", 3);
