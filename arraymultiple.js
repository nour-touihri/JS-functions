function arrayOfMultiples (num, length) {
	let res=[] //empty array to store the result in 
	for (let i=1; i<=length ; i++){
		res.push(num*i) // Multiply the number by the current index and add it to the array
	}
	return res
}