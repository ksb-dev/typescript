function combine (
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-string'
) {
  let result: number | string

  if (resultConversion === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const stringResult = combine(30, 50, 'as-string')
console.log(stringResult)

const numberResult = combine('10', '20', 'as-number')
console.log(numberResult)
