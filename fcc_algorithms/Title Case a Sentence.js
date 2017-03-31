function titleCase(str) {
  
 var newstr = str.split(" ");
  
  for(i=0;i<newstr.length;i++){
    
    var copy = newstr[i].substring(1).toLowerCase();
    newstr[i] = newstr[i][0].toUpperCase() + copy;
    
  }
   newstr = newstr.join(" ");
   return newstr;
}  


titleCase("I'm a little tea pot");
