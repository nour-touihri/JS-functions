function filterArray(arr) {
  let result = []; // Create an empty array to store valid results

  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is a non-negative integer
    if 
      (typeof arr[i] === 'number' && Number.isInteger(arr[i]) && arr[i] >= 0) {
        result.push(arr[i]);
      }
    } 
    return result;
  }