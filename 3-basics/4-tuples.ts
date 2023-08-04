// A tuple is a typed array with a pre-defined length and types for each index.

const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string]
} = {
  name: 'Kedar',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

//person.role.push('admin') // why this works ?
//person.role[1] = 10

console.log(person)
