type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-string'

function combine (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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

// -----------------------------------------------

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
// For example:

type User1 = { name: string; age: number }
const u1: User1 = { name: 'Max', age: 30 }

// This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:

function greet1 (user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name)
}

function isOlder1 (user: { name: string; age: number }, checkAge: number) {
  console.log(checkAge < user.age)
}

//To:

function greet2 (user: User2) {
  console.log('Hi, I am ' + user.name)
}

function isOlder2 (user: User2, checkAge: number) {
  console.log(checkAge < user.age)
}

type User2 = { name: string; age: number }
const u2: User2 = { name: 'Kedar', age: 30 }

greet1(u2)
isOlder1(u2, 25)

greet2(u2)
isOlder2(u2, 25)
