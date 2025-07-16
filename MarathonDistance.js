function marathonDistance(d) {
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += Math.abs(d[i]);  // Add the absolute value of the current distance to the sum
  }// Check if the total distance equals 25
  return sum === 25;
}
