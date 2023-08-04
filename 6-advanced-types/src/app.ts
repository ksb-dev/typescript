// Intersection Types

// type stringNum = string | number
// type NumBool = number | boolean

// type combine = stringNum & NumBool // Intersection type

// const value: combine = 10

// function add (a: combine, b: combine) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString()
//   }
//   return a + b
// }

// ------------------------------------------

// type Admin = {
//   name: string
//   privileges: string[]
// }

// type Employee = {
//   name: string
//   startDate: Date
// }

// type ElevatedEmployee = Admin & Employee // Intersection type

// const e1: ElevatedEmployee = {
//   name: 'Kedar',
//   privileges: ['create-server'],
//   startDate: new Date()
// }

// type UnknownEmployee = Employee | Admin

// function printEmployeeInfo (emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name)

//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges)
//   }
// }

//printEmployeeInfo(e1)

// ------------------------------------------

// class Car {
//   drive () {
//     console.log('Driving...')
//   }
// }

// class Truck {
//   drive () {
//     console.log('Driving a truck...')
//   }

//   loadCargo (amount: number) {
//     console.log('Loading cargo... ' + amount)
//   }
// }

// type Vehicle = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// function useVehicle (vehicle: Vehicle) {
//   vehicle.drive()

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000)
//   }
// }

// useVehicle(v1)
// useVehicle(v2)

// ------------------------------------------
// Discriminated Union

// interface Bird {
//   kind: 'Bird'
//   flyingSpeed: number
// }

// interface Horse {
//   kind: 'Horse'
//   runningSpeed: number
// }

// type Animal = Bird | Horse

// function speed (animal: Animal) {
//   //   if (animal.kind === 'Bird') {
//   //     console.log('Flying speed: ' + animal.flyingSpeed)
//   //   }

//   //   if (animal.kind === 'Horse') {
//   //     console.log('Running speed: ' + animal.runningSpeed)
//   //   }

//   switch (animal.kind) {
//     case 'Bird':
//       console.log('Flying speed: ' + animal.flyingSpeed)
//       break
//     case 'Horse':
//       console.log('Running speed: ' + animal.runningSpeed)
//       break
//     default:
//       console.log('---')
//   }
// }

// const bird: Bird = {
//   kind: 'Bird',
//   flyingSpeed: 10
// }

//speed(bird)

// ------------------------------------------
// Type Casting

//const userInput = <HTMLInputElement>document.querySelector('user-input')!
//or
// const userInput = document.querySelector('user-input')! as HTMLInputElement

// // If you don't want to use !
// // if (userInput) {
// //   ;(userInput as HTMLInputElement).value = 'Hi there'
// // }

// userInput.value = 'Hi there'

// // ------------------------------------------
// // Index Properties

// interface ErrorCntainer {
//   [prop: string]: string
//   //[prop: number]: string
// }

// const emailError: ErrorCntainer = {
//   email: 'Not a valid email',
//   userName: 'Must start with a capital character'
// }

// const passwordError: ErrorCntainer = {
//   password: ' 12345'
// }

// ------------------------------------------
// Function Overloading

// type stringNum = string | number
// type NumBool = number | boolean

// type combine = stringNum & NumBool // Intersection type

// const value: combine = 10

// function add(a: string, b: string): string
// function add(a: number, b: number): number
// function add (a: any, b: any): any {
//   return a + b
// }

// add('Hello ', 'Steve') // returns "Hello Steve"
// add(10, 20) // returns 30

/*
Function overloading with different number of parameters and types with same name is not supported
 */

// function display (a: string, b: string): void {
//   //Compiler Error: Duplicate function implementation
//   console.log(a + b)
// }

// function display (a: number, b:number): void {
//   //Compiler Error: Duplicate function implementation
//   console.log(a)
// }

// ------------------------------------------
// Optional Chaining

// const fetchUserDta = {
//   id: 'id-1',
//   name: 'Kedar',
//   Job: { title: 'Full stack developer' }
// }

// console.log(fetchUserDta?.Job?.title)

// ------------------------------------------
// Nullish coalescing

const userInput = null

const data = userInput ?? '12345'

console.log(data)
