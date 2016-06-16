function whereAreYou(collection, source) {  
  
var arr = [];
var key = Object.keys(source);

for (var name in collection) {
var i = 0;
for (n = 0; n < key.length; n++) {
if (collection[name][key[n]] === source[key[n]]) {
i = i + 1;
  }
}
if (i === key.length) {
arr.push(collection[name]);
}
}
return arr;
}
  
      


whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });