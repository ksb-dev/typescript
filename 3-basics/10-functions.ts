function add (n1: number, n2: number): number {
  return n1 + n2
  //return n1.toString() + n2.toString()
}

function printResult (num: number) {
  console.log('Result is : ' + num)
}

printResult(add(5, 10))
console.log(printResult(add(5, 10))) // undefined
