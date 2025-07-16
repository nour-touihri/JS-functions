function squareDigits(num) {
  return Number(num.toString().split("").map(d => d * d).join("")); // Squares each digit of the number and joins the results 
}