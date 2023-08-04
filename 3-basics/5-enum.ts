// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

// enum Role {
//   ADMIN,
//   READ__ONLY,
//   AUTHOR
// }

enum Role {
  ADMIN = 'ADMIN',
  READ__ONLY = 100,
  AUTHOR = 200
}

const person: {
  name: string
  age: number
  hobbies: string[]
  role: Role
} = {
  name: 'Kedar',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
  console.log(person)
}
