// ex: 1

// class Department {
//   name: string

//   constructor (name: string) {
//     this.name = name
//   }

//   describe1 () {
//     console.log(this.name)
//   }

//   describe2 (this: Department) {
//     console.log(this.name)
//   }
// }

// const accounting = new Department('Accounting')
// accounting.describe1() // Accounting

// const accountingCopy1 = { describe: accounting.describe1 }
// accountingCopy1.describe() // undefined

// const accountingCopy2 = { name: 'Dummy', describe: accounting.describe1 }
// accountingCopy2.describe() // Dummy

// console.log(accounting)

// ------------------------------------------------------------------

// ex: 2 (Access modifiers)

// class Department {
//   name: string
//   private employess: string[] = []

//   constructor (name: string) {
//     this.name = name
//   }

//   describe (this: Department) {
//     console.log(this.name)
//   }

//   addEmployee (employee: string) {
//     this.employess.push(employee)
//   }

//   printEmployees () {
//     console.log(this.employess)
//   }
// }

// const accounting = new Department('Accounting')
// accounting.addEmployee('Kedar')
// accounting.addEmployee('John')

// // accounting.employess[2] = 'Anna'

// accounting.describe()
// accounting.printEmployees()

// console.log(accounting)

// ------------------------------------------------------------------

// ex: 3 (Shorthand Initialization)

// class Department {
//   //   id: string
//   //   name: string

//   //   constructor (id: string, name: string) {
//   //     this.id = id
//   //     this.name = name
//   //   }

//   constructor (private id: string, public name: string) {}

//   describe (this: Department) {
//     console.log(this.id, this.name)
//   }
// }

// const accounting = new Department('12', 'Accounting')

// accounting.describe()

// ------------------------------------------------------------------

// ex: 4 (readonly modifier)

// class Department {
//   constructor (private readonly id: string, public name: string) {}

//   describe (this: Department) {
//     console.log(this.id, this.name)
//   }

//   changeId () {
//     //this.id = 2
//   }
// }

// const accounting = new Department('12', 'Accounting')

// accounting.describe()

// ------------------------------------------------------------------

// ex: 5 (Overriding)

// class Department {
//   protected employees: string[] = []

//   constructor (private readonly id: string, private name: string) {}

//   describe (this: Department): void {
//     console.log(this.name)
//   }

//   addEmployee (employee: string): void {
//     this.employees.push(employee)
//     console.log('Parent addEmployee()')
//   }

//   printEmployees (): void {
//     console.log(this.employees)
//   }
// }

// class ITDepartment extends Department {
//   constructor (id: string, public admins: string[]) {
//     super(id, 'IT')
//   }

//   addEmployee (employee: string): void {
//     this.employees.push(employee)
//     console.log('Child addEmployee()')
//   }

//   addAdmin (admin: string) {
//     this.admins.push(admin)
//   }
// }

// const it = new ITDepartment('d2', ['Kedar'])

// it.addEmployee('John')
// it.addAdmin('James')

// console.log(it)

// ------------------------------------------------------------------

// ex: 6 (gettres ans setters (to access private properties outside of class))

// class Department {
//   private name: string

//   set Name (value: string) {
//     this.name = value
//   }

//   get Name () {
//     return this.name
//   }

//   constructor (name: string) {
//     this.name = name
//   }
// }

// const d = new Department('Kedar')

// d.Name = 'John'

// console.log(d.Name)

// ------------------------------------------------------------------

// ex: 7 (Static properties & methods (can't be accessible from non-static parts))

// class Department {
//   static num1: number = 10
//   static num2: number = 20

//   static func () {
//     console.log('static method : ' + (this.num1 + this.num2))
//   }
// }

// Department.func()

// console.log('Static number : ' + +Department.num1)

// ------------------------------------------------------------------

// ex: 8 (Abstract classes)

/*
An abstract class is typically used to define common behaviors for
derived classes to extend. Unlike a regular class, an abstract 
class cannot be instantiated directly.
*/

// abstract class Animal {
//   constructor (protected type: string) {}

//   abstract animalType(): void
// }

// class Frog extends Animal {
//   constructor () {
//     super('Amphibian')
//   }
//   animalType (): void {
//     console.log('Fish is of type ' + this.type)
//   }
// }

// class Bat extends Animal {
//   constructor () {
//     super('Mammal')
//   }
//   animalType (): void {
//     console.log('Bat is of type ' + this.type)
//   }
// }

// const frog = new Frog()
// frog.animalType()

// const bat = new Bat()
// bat.animalType()

// ------------------------------------------------------------------

// ex: 9 (Singletons & private constructor)

// class SngletonClass {
//   private constructor (public property: string) {}

//   private static instance: SngletonClass

//   static getInstance (): SngletonClass {
//     if (SngletonClass.instance) {
//       return this.instance
//     }
//     this.instance = new SngletonClass('instance-1')

//     return this.instance
//   }
// }

// const s1 = SngletonClass.getInstance()
// const s2 = SngletonClass.getInstance()

// //const s3 = new SngletonClass('instance-2')

// console.log(s1.property)
// console.log(s2.property)

// ------------------------------------------------------------------

// ex: 10 (Interfaces)

// Before interface

// function getFullName1 (person: {
//   readonly id: number
//   firstName: string
//   lastName: string
//   age?: string
// }) {
//   return `${person.id} ${person.firstName} ${person.lastName}`
// }

// let person = {
//   id: 1,
//   firstName: 'John',
//   lastName: 'Wick'
// }

// console.log(getFullName1(person))

// After interface

// interface Person {
//   readonly id: number
//   age?: string
//   firstName: string
//   lastName: string
// }

// function getFullName2 (person: Person) {
//   return `${person.id} ${person.firstName} ${person.lastName}`
// }

// let john = {
//   id: 2,
//   firstName: 'James',
//   lastName: 'Bond'
// }

// console.log(getFullName2(john))

// ------------------------------------------------------------------

// ex: 11 (using interfaces with classes)

// interface Greetable {
//   name: string

//   greet(phrase: string): void
// }

// class Person implements Greetable {
//   age = 30

//   constructor (public name: string) {}

//   greet (phrase: string): void {
//     console.log(phrase + ' ' + this.name)
//   }
// }

// const person = new Person('Kedar')
// person.greet('Hi there - I am')

// let user1: Greetable
// user1 = new Person('Anna')
// user1.greet('Hi there - I am')

// ------------------------------------------------------------------

// ex: 12 (extending interfaces)

interface addFn {
  (a: number, b: number): number
}

interface Named {
  readonly name: string
  age: number
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class Person implements Greetable {
  age = 30

  constructor (public name: string) {}

  greet (phrase: string): void {
    console.log(phrase + ' ' + this.name)
  }

  add: addFn = (a: number, b: number) => {
    console.log(a + b)
    return 0
  }
}

const person = new Person('Kedar')
person.greet('Hi there - I am')
person.add(1, 2)

// ------------------------------------------------------------------
