function verFibonacci(n) {
  let a = 0;
  let b = 1;
  
  while (b < n) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  
  return b === n;
}

//Test
console.log(verFibonacci(13)); //true or false

