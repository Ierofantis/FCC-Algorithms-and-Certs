function truncateString(str, num) {
    if (num > 3) {
     if(str.length > num) {
        str = str.slice(0,num-3) + "...";
      }
  } else {
        str = str.slice(0,num) + "...";
  }
// Clear out that junk in your trunk
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
