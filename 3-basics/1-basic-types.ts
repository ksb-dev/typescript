/* 

Javscript core types (also available to typescript because typescript is superset of javascript)

1. number 
2. string 
3. boolean 
4. object
5. null
6. undefined
7. symbol

*/

// --------------------------------------------------

/*

Typescript built-in types 

1. any
2. unknown
3. never
4. enum
5. tuple

*/

function add (n1: number, n2: number, showResult: boolean, phrase: string) {
  let result = n1 + n2

  if (showResult) {
    console.log(phrase + result)
  } else {
    return result
  }
}

const num1 = '5'
const num2 = 10.2
const showResult = true
const phrase = 'Result is : '

const res = add(+num1, num2, showResult, phrase)

console.log(res)
