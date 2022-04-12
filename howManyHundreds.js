function howManyHundreds(num){
  const value = num / 100
  return Math.floor(value)
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(1234), "=?", 12);