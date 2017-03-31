function translate(str) {


 var c = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');
  if (c !== ''){
    news = str.replace(c, '') + c + "ay";
  } else {
    news = str + "way";

 
  
  }  
  
  
  
  return news;
}

translate("consonant");
