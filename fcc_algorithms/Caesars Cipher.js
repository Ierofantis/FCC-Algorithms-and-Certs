function rot13(str) {
  
      return str.replace(/[a-zA-Z]/g, function(letter){
        
      var transform = String.fromCharCode(letter.charCodeAt(0) - 13);
      if(!/[a-zA-Z]/g.test(transform)){
        return String.fromCharCode(letter.charCodeAt(0) + 13);
      }
     return transform;
   });
}
