// 1.  CREATING CLASSES

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

// 2. READ ONLY AND OPTIONAL PROPERTIES

class BankAccount {
  readonly id: number
  owner: string
  balance: number
  nickname?: string

  constructor (id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this.balance = balance
  }

  deposit (amount: number) {
    if (amount <= 0) throw new Error('Invalid Amount!')
    this.balance += amount
  }
}

let kedar = new BankAccount(1, 'Kedar', 15_000)

//kedar.id = 10 // Error because id is declared as "readonly" so you can assign a value to id only in constructor

// 3. ACCESS CONTROL KEYWORDS
