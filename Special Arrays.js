function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
     // If the index is even
    if (i % 2 === 0) {
       // The value at this index must also be even
      if (arr[i] % 2 !== 0) return false;
    } else {
       // If the index is odd, the value must be odd too
      if (arr[i] % 2 === 0) return false;
    }
  }
  return true;
}