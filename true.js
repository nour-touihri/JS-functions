function countTrue(arr) {
  let sumtrue = 0; // Start with 0 to count how many times true appears
  for (let i = 0; i < arr.length; i++) {
    // If the current element is true, increment the counter
    if (arr[i]) {
      sumtrue += 1;
    }
  }
  return sumtrue;
}