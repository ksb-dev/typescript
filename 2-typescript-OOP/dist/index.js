"use strict";
// -------------------------------------------------
// 1.  CREATING CLASSES
// -------------------------------------------------
// class BankAccount {
//   id: number
//   owner: string
//   balance: number
//   constructor (id: number, owner: string, balance: number) {
//     this.id = id
//     this.owner = owner
//     this.balance = balance
//   }
//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }
// }
// let kedar = new BankAccount(1, 'Kedar', 15_000)
// kedar.deposit(7000)
// console.log(kedar.balance)
// console.log(typeof kedar)
// console.log(kedar instanceof BankAccount)
// -------------------------------------------------
// 2. READ ONLY AND OPTIONAL PROPERTIES
// -------------------------------------------------
// class BankAccount {
//   readonly id: number
//   owner: string
//   balance: number
//   nickname?: string
//   constructor (id: number, owner: string, balance: number) {
//     this.id = id
//     this.owner = owner
//     this.balance = balance
//   }
//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }
// }
// let kedar = new BankAccount(1, 'Kedar', 15_000)
//kedar.id = 10 // Error because id is declared as "readonly" so you can assign a value to id only in constructor
// -------------------------------------------------
// 3. ACCESS CONTROL KEYWORDS
// -------------------------------------------------
// class BankAccount {
//   readonly id: number
//   owner: string
//   private balance: number
//   nickname?: string
//   constructor (id: number, owner: string, balance: number) {
//     this.id = id
//     this.owner = owner
//     this.balance = balance
//   }
//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }
//   getBalance (): number {
//     return this.balance
//   }
// }
// let kedar = new BankAccount(1, 'Kedar', 15_000)
// console.log(kedar.getBalance())
// -------------------------------------------------
// 4. PARAMETER PROPERTIES
// -------------------------------------------------
// class BankAccount {
//   nickname?: string
//   constructor (
//     public readonly id: number,
//     public owner: string,
//     private balance: number
//   ) {}
//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }
//   getBalance (): number {
//     return this.balance
//   }
// }
// let kedar = new BankAccount(1, 'Kedar', 15_000)
// -------------------------------------------------
// 5. GETTERS AND SETTERS
// -------------------------------------------------
// class BankAccount {
//   nickname?: string
//   constructor (
//     public readonly id: number,
//     public owner: string,
//     private balance: number
//   ) {}
//   deposit (amount: number) {
//     if (amount <= 0) throw new Error('Invalid Amount!')
//     this.balance += amount
//   }
//   getBalance (): number {
//     return this.balance
//   }
//   setBalance (value: number): void {
//     if (value < 0) throw new Error('Invalid Value!')
//     this.balance = value
//   }
// }
// let kedar = new BankAccount(1, 'Kedar', 15_000)
// console.log(kedar.getBalance())
// kedar.setBalance(20_000)
// console.log(kedar.getBalance())
// -------------------------------------------------
// 6. INDEX SIGNATURES
// -------------------------------------------------
// class SeatAssignment {
//   [seatNumber: string]: string
// }
// let seats = new SeatAssignment()
// seats.A1 = 'Kedar'
// // OR
// //seats['A1'] = "Kedar"
// seats.A2 = 'John'
// -------------------------------------------------
// 7. STATIC MEMBERS
// -------------------------------------------------
// class Ride {
//   activeRides: number = 0
//   start () {
//     this.activeRides++
//   }
//   stop () {
//     this.activeRides--
//   }
// }
// let ride1 = new Ride()
// ride1.start()
// let ride2 = new Ride()
// ride2.start()
// console.log(ride1.activeRides)
// console.log(ride2.activeRides)
// class Ride {
//   private static _activeRides: number = 0
//   start () {
//     Ride._activeRides++
//   }
//   stop () {
//     Ride._activeRides--
//   }
//   static get activeRides (): number {
//     return Ride._activeRides
//   }
// }
// let ride1 = new Ride()
// ride1.start()
// let ride2 = new Ride()
// ride2.start()
// console.log(Ride.activeRides)
// -------------------------------------------------
// 8. INHERITANCE
// -------------------------------------------------
// class Person {
//   constructor (public firstName: string, public lastName: string) {}
//   get fullName (): string {
//     return this.firstName + ' ' + this.lastName
//   }
//   walk () {
//     console.log('Walking')
//   }
// }
// class Student extends Person {
//   constructor (public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName)
//   }
//   takeTest () {
//     console.log('Taking a test')
//   }
// }
// let student = new Student(1, 'Kedar', 'Babaleshwar')
// console.log(student.studentId)
// console.log(student.firstName)
// console.log(student.lastName)
// console.log(student.fullName)
// console.log(student.walk())
// console.log(student.takeTest())
// -------------------------------------------------
// 9. METHOD OVERRIDING
// -------------------------------------------------
// class Person {
//   constructor (public firstName: string, public lastName: string) {}
//   get fullName (): string {
//     return this.firstName + ' ' + this.lastName
//   }
//   walk () {
//     console.log('Walking')
//   }
// }
// class Student extends Person {
//   constructor (public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName)
//   }
//   takeTest () {
//     console.log('Taking a test')
//   }
// }
//class Teacher extends Person {
// if you uncomment ""noImplicitOverride": true" below you'll get error (below code is not recommended)
//   get fullName (): string {
//     return 'Professor ' + super.fullName
//   }
// OR
// Recommended
//   override get fullName (): string {
//     return 'Professor ' + super.fullName
//   }
// }
// let teacher = new Teacher('Kedar', 'Babaleshwar')
// console.log(teacher.fullName)
// -------------------------------------------------
// 10. POLYMORPHISM
// -------------------------------------------------
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
printNames([
    new Student(1, 'Kedar', 'Babaleshwar'),
    new Teacher('John', 'Smith'),
    new Principal('James', 'Bond')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map