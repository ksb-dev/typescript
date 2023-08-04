"use strict";
// Decorators execute when your class is defined (need not to be instantiated)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// function Logger (constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }
// @Logger
// class Person {
//   name = 'John'
//   constructor () {
//     console.log('Creating person object...')
//   }
// }
// const person = new Person()
// console.log(person)
// -------------------------------------
// Decorator Factories (which returns decorator function)
// function Logger (logStrng: string) {
//   return function (constructor: Function) {
//     console.log(logStrng)
//     console.log(constructor)
//   }
// }
// @Logger('Logging Person...')
// class Person {
//   name = 'John'
//   constructor () {
//     console.log('Creating person object...')
//   }
// }
// const person = new Person()
// console.log(person)
// -------------------------------------
// Multiple Decorators
// function Logger (logStrng: string) {
//   console.log('Logger Factory')
//   return function (constructor: Function) {
//     console.log(logStrng)
//     console.log(constructor)
//   }
// }
// function WithTemplate (template: string, hookId: string) {
//   console.log('Template Factory')
//   return function (constructor: any) {
//     console.log('Rendering template...')
//     const hookEl = document.getElementById(hookId)
//     const p = new constructor()
//     if (hookEl) {
//       hookEl.innerHTML = template
//       hookEl.querySelector('h1')!.textContent = p.name
//     }
//   }
// }
// @Logger('Logging...')
// @WithTemplate('<h1>Person Object</h1>', 'app')
// class Person {
//   name = 'John'
//   constructor () {
//     console.log('Creating person object...')
//   }
// }
// const person = new Person()
// console.log(person)
// -------------------------------------
// Adding decorators to properties
// function Log (target: any, propertyName: string | Symbol) {
//   console.log('Property decorator!')
//   console.log(target, propertyName)
// }
// class Product {
//   @Log
//   title: string
//   private _price: number
//   set price (val: number) {
//     if (val > 0) {
//       this._price = val
//     } else {
//       throw new Error('Invalid price - should be positive!')
//     }
//   }
//   constructor (t: string, p: number) {
//     this.title = t
//     this._price = p
//   }
//   getPriceWithTax (tax: number) {
//     return this.price * tax
//   }
// }
// -------------------------------------
//Adding decorators to property, accessor, method & parameters
function Log(target, propertyName) {
    console.log('1-Property decorator!');
    console.log(target, propertyName);
}
function Log2(target, name, desc) {
    console.log('2-Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(desc);
}
function Log3(target, name, desc) {
    console.log('3-Method decorator');
    console.log(target);
    console.log(name);
    console.log(desc);
}
function Log4(target, name, position) {
    console.log('4-Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this.price * tax;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
// -------------------------------------
// IMPORTANT
// Returning (and changing) a Class in a Class Decorators
// function Logger(logStrng: string) {
//   console.log("Logger Factory");
//   return function (constructor: Function) {
//     console.log(logStrng);
//     console.log(constructor);
//   };
// }
// function WithTemplate(template: string, hookId: string) {
//   console.log("Rendering Factory");
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         console.log("Rendering template...");
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }
// @Logger("Logging...")
// @WithTemplate("<h1>Person Object</h1>", "app")
// class Person {
//   name = "John";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }
// const person = new Person();
// console.log(person);
// -------------------------------------
// Other decorator return type
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("1-Property decorator!");
//   console.log(target, propertyName);
// }
// function Log2(target: any, name: string, desc: PropertyDescriptor) {
//   console.log("2-Accessor decorator");
//   console.log(target);
//   console.log(name);
//   console.log(desc);
// }
// function Log3(target: any, name: string | Symbol, desc: PropertyDescriptor) {
//   console.log("3-Method decorator");
//   console.log(target);
//   console.log(name);
//   console.log(desc);
// }
// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("4-Parameter Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }
// class Product {
//   @Log
//   title: string;
//   private _price: number;
//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }
//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }
//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this.price * tax;
//   }
// }
// -------------------------------------
// Creating autobind decorator
// function AutoBind(_1: any, _2: string, desc: PropertyDescriptor) {
//   const originalMethod = desc.value;
//   const adjustDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return adjustDescriptor;
// }
// class Printer {
//   message = "This works!";
//   @AutoBind
//   showMessage() {
//     console.log(this.message);
//   }
// }
// const p = new Printer();
// p.showMessage();
// const button = document.querySelector("button")!;
// //button.addEventListener("click", p.showMessage.bind(p));
// button.addEventListener("click", p.showMessage);
// -------------------------------------
// Validation with decorators (Need to complete)
// function Required(_: any, name: string) {
//   if (name.length > 0) {
//     return name;
//   }
// }
// function PositiveNumber(_: any, name: string | number) {
//   if (+name > 0) {
//     return name;
//   }
// }
// function validate(obj: object) {
//   return obj;
// }
// class Course {
//   @Required
//   title: string;
//   @PositiveNumber
//   price: number;
//   constructor(t: string, p: number) {
//     this.title = t;
//     this.price = p;
//   }
// }
// const courseForm = document.querySelector("form");
// courseForm?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const titleEl = document.getElementById("title") as HTMLInputElement;
//   const priceEl = document.getElementById("price") as HTMLInputElement;
//   const title = titleEl.value;
//   const price = +priceEl.value;
//   const createdCourse = new Course(title, price);
//   if (!validate(createdCourse)) {
//     alert("Invalid input, please try again");
//     return;
//   }
//   console.log(createdCourse);
// });
