function steamrollArray(arr) {
  if (!arr.length) {
    return [];  
  } else if (Array.isArray(arr[0])) {
    return steamrollArray(arr[0]).concat(steamrollArray(arr.slice(1)));
  } else {
    return [arr[0]].concat(steamrollArray(arr.slice(1)));

  }
  return result;
}

steamrollArray([[["a"]], [["b"]]]);