function add (n1: number, n2: number): number {
  return n1 + n2
  //return n1.toString() + n2.toString()
}

function printResult (num: number) {
  console.log('Result is : ' + num)
}

let sum: (a: number, b: number) => number

sum = add

console.log(sum(5, 10))
