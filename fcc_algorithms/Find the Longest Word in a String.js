 
function findLongestWord(str) {

var res=str.split(' ');
var Max=0;

  for (i=0;i<res.length;i++)
    
    {
      if(res[i].length>Max)
      
        Max=res[i].length;
      
    }

return Max;

} 


findLongestWord("The quick brown fox jumped over the lazy dog");