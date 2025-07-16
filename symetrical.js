function isSymmetrical(num) {
	let str = String(num);
	  let reverse = str.split('').reverse().join(''); // Reverse the string
  if (reverse === str) { 
		return true // Compare reversed string to original string
    // symmetrical number: return true
  } else {
		return false
    // not symmetrical: return false
  }
}
