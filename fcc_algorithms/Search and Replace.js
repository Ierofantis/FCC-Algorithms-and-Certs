function myReplace(str, before, after) {
  
 
  
  if (before[0] === before[0].toUpperCase()) {
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');
  } else if (before[0] === before[0].toLowerCase()) {
    after = after.split('');
    after[0] = after[0].toLowerCase();
    after = after.join('');
  }

  return str.replace(before, after);
} 
  
  


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");