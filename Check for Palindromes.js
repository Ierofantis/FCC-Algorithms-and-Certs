function palindrome(str) {

   
  var result=str.replace(/[\W_]/g, '').toLowerCase();
  var res=result.split('').reverse().join('');
 
  for (var i=0; i<result.length;  i++){
    
    if (res===result) {
      
      return true;
    }
    else{
      return false;
    }
 
  }
 
}

palindrome("eye");