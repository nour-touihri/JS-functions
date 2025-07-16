function filterArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      (typeof arr[i] === 'number' && Number.isInteger(arr[i]) && arr[i] >= 0) ||
      typeof arr[i] === 'string'
    ) {
      if (typeof arr[i] === 'number') {
        result.push(arr[i]);
      }
    } else {
      return 'enter only non-negative integers and strings';
    }
  }