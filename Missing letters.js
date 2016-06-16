function fearNotLetter(str) {
  var alp = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ').split(''), i;
    for (i =  alp.indexOf(str.charAt(0)); i < str.length; i++) {
        if (str.split('').indexOf(alp[i]) === -1) {
            return alp[i];
        }
    }
    return undefined;
}
fearNotLetter("abce");
