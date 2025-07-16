function sumOfCubes(arr) {
	let sum=0 ; //a variable to store the sum of cubes
  for (let i=0 ; i <arr.length;i++){
		sum+=arr[i]*arr[i]*arr[i]; // Add the cube of each element to sum
	}
	return sum;
}