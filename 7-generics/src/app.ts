// -->  Built-in generics

// const numbers: Array<number | string | boolean> = [1, 'kedar', true]

// const promise: Promise<string> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Promise Resolved')
//   }, 1000)
// })

// promise.then(data => console.log(data))

// ----------------------------------------------

// --> Creating own generics

// function merge<T extends object, U> (objA: T, objB: U) {
//   return Object.assign(objA, objB)
// }

// const mergedObj = merge({ name: 'John', hobbies: [1] }, { age: 31 })
// console.log(mergedObj.name)

// ----------------------------------------------

// --> Setting constraints

// function merge<T extends object, U extends number> (objA: T, objB: U) {
//   return Object.assign(objA, objB)
// }

// const mergedObj = merge({ name: 'John', hobbies: [1] }, 31)
// console.log(mergedObj.name)

// ----------------------------------------------

// interface lengthy {
//   length: number
// }

// function countAndDescribe<T extends lengthy> (el: T): [T, string] {
//   let descriptionText = 'Got no value'

//   if (el.length > 0) {
//     descriptionText = 'Got ' + el.length + ' elements'
//   }
//   return [el, descriptionText]
// }

// console.log(countAndDescribe('Kedar'))
// console.log(countAndDescribe([1, 2]))

// ----------------------------------------------

// The keyof constarint

// function extractAndConvert<T extends object, U extends keyof T> (
//   obj: T,
//   key: U
// ) {
//   return 'Value: ' + obj[key]
// }

// extractAndConvert({ name: 'Max' }, 'name')

// ----------------------------------------------

// Generic Classes

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = []

//   addItem (item: T) {
//     this.data.push(item)
//   }

//   removeItem (item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return
//     }
//     this.data.splice(this.data.indexOf(item), 1)
//   }

//   getItems () {
//     return [...this.data]
//   }
// }

// const textStorage = new DataStorage<string>()
// textStorage.addItem('John')
// textStorage.addItem('Wick')
// textStorage.removeItem('John')

// console.log(textStorage.getItems())

// const numberStorage = new DataStorage<number>()
// numberStorage.addItem(1)
// numberStorage.addItem(2)
// numberStorage.removeItem(1)

// console.log(numberStorage.getItems())

// ----------------------------------------------

// Generic utility types (Partial, Readonly)

// interface CourseGoal {
//   title: string
//   description: string
//   completeUntil: Date
// }

// function createCourseGoal (
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {}
//   courseGoal.title = title
//   courseGoal.description = description
//   courseGoal.completeUntil = date

//   return courseGoal as CourseGoal
// }

// // Readonly

// const names: Readonly<string[]> = ['John', 'Wick']
//names.push('cannot push')

// ----------------------------------------------

// Generic vs Union types
