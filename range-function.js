function range(start, end, step){
  const newArray = [];
  if (start > end) {
    return [];
  }
  else if (step <= 0) {
    return [];
  }
  else if (start === null || end === null || step === null){
    return [];
  }
  else {
    for(let i = start; i <= end; i += step){
      newArray.push(i);
    }
    return newArray
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

