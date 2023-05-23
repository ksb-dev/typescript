import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 2, 6, -1, 0])
console.log('---- Numbers Before sorting ----')
numbersCollection.print()
numbersCollection.sort()
console.log('---- Numbers After sorting ----')
numbersCollection.print()

console.log('-----------------------------------------------------------------')

const charactersCollection = new CharactersCollection('cBaFd')
console.log('---- Strings Before sorting ----')
charactersCollection.print()
charactersCollection.sort()
console.log('---- Strings After sorting ----')
charactersCollection.print()

console.log('-----------------------------------------------------------------')

const linkedList = new LinkedList()
linkedList.addFirst(10)
linkedList.addLast(5)
linkedList.addLast(-8)
linkedList.addFirst(20)

console.log('---- Linked List Before sorting ----')
linkedList.print()
linkedList.sort()
console.log('---- Linked List After sorting ----')
linkedList.print()
