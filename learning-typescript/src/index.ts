let age: number = 20

if (age < 50) {
  age += 10
}

//console.log(age)

// --> BUILT-IN-TYPES IN TYPESCRIPT

// (includes javascript types also because typescript is built on top of javascript or you can say typescript is superset of javascript)

// 1. any
// 2. unknown
// 3. never
// 4. enum
// 5. tuple

// let sales: number = 123_456_789
// let course: string = 'Typescript'
// let is_published: boolean = true
// let level

// or

let sales = 123_456_789
//sales = 'e' // type error
let course = 'Typescript'
let is_published = true

// ------------------------------

// --> THE ANY TYPE

let level
level = 1
level = 'Kedar'

// Note: You can assign number, string ... to a "any" type , but it is against the idea of typescript because we use typescript for type safety

// function render(document) {
//     console.log(document)
// }

// to remove error you can use "document: any" or set noImplicity: false in tsconfig.json file

function render (document: any) {
  console.log(document)
}

// ------------------------------

// --> ARRAYS

//Note : when you assign empty array to a variable you must mention it's type otherwise compiler will think is is of type "any"

let array: number[] = []

let numberArray: number[] = [1, 2, 3] // type error
numberArray.forEach(n => console.log(n.toString()))

// ------------------------------

// --> TUPLES

// A tuple is a typed array with a pre-defined length and types for each index.

let user: [number, string] = [5, 'Kedar']
//user.push(1) // Here compiler doesn't complain (should be solved in near future)

// Note: recommended to restrict length of tuple to 2

// ------------------------------

// --> ENUMS

enum Height {
  Small,
  Medium,
  Large
}

let myHeight: Height = Height.Medium

//console.log(myHeight)

// If use prefix enum with const compiler will generate more optimized code in index.js

const enum Size {
  Small = 1,
  Medium,
  Large
}

let mySize: Size = Size.Medium

//console.log(mySize)

// ------------------------------

// --> FUNCTIONS

function calculateTax1 (income: number, taxYear: number): number {
  //let x
  if (taxYear < 2022) return income * 1.2
  return income * 1.3
}
calculateTax1(10_000, 2022)

function calculateTax2 (income: number, taxYear?: number): number {
  //let x
  if ((taxYear || 2021) < 2022) return income * 1.2
  return income * 1.3
}
calculateTax2(10_000)

function calculateTax3 (income: number, taxYear = 2021): number {
  //let x
  if (taxYear < 2022) return income * 1.2
  return income * 1.3
}
calculateTax3(10_000)
calculateTax3(10_000, 2020) // This "2020" will override default taxYear value "2021"

/*
"noUnusedParameters": true
"noImplicitReturns": true
"noUnusedLocals": true
*/

// ------------------------------

// --> Objects

let employee1: { id: number; name?: string } = { id: 1 }
// If you don't specify name make it optional but that is not recommended

let employee2: { id: number; name: string } = { id: 1, name: 'Kedar' }
employee2.id = 3

// If you don't want to modify object property id then use readonly
let employee3: { readonly id: number; name: string } = { id: 1, name: 'Kedar' }
//employee3.id = 3

// Adding methods
let employee4: {
  readonly id: number
  name: string
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'Kedar',
  retire: (date: Date) => {
    console.log(date)
  }
}

// ------------------------------

// --> TYPE ALIASES

type Employee = {
  readonly id: number
  name: string
  retire: (date: Date) => void
}

let employee5: Employee = {
  id: 1,
  name: 'Kedar',
  retire: (date: Date) => {
    console.log(date)
  }
}

// ------------------------------

// --> UNION TYPES

function kgToLbs (weight: number | string) {
  // Narrowing
  if (typeof weight === 'number') return weight * 2.2
  else return parseInt(weight) * 2.2
}

kgToLbs(54)
kgToLbs('54')
