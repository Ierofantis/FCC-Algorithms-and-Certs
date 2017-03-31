function convert(num) {

var a=[3999, 2014, 1023, 1006, 1004, 1000, 891, 798, 649, 501, 500, 99, 97, 83, 68, 45, 44, 29, 16, 12, 9, 5, 4, 3, 2  ];
  
var b=["MMMCMXCIX", "MMXIV", "MXXIII", "MVI", "MIV", "M", "DCCCXCI", "DCCXCVIII", "DCXLIX", "DI", "D", "XCIX", "XCVII", "LXXXIII", "LXVIII",  "XLV", "XLIV", "XXIX", "XVI", "XII", "IX", "V", "IV", "III", "II" ];
  
for (var i=0;i<a.length;i++){
  
    while (num>=a[i])
      {
      return b[i];
        
      }
   }
  
}

convert(3);
