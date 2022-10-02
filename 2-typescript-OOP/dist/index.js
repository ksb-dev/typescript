"use strict";
// 1.  CREATING CLASSES
class BankAccount {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount!');
        this.balance += amount;
    }
}
let kedar = new BankAccount(1, 'Kedar', 15000);
kedar.deposit(7000);
console.log(kedar.balance);
console.log(typeof kedar);
console.log(kedar instanceof BankAccount);
//# sourceMappingURL=index.js.map