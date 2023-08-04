import { Sorter } from './Sorter'

class Node {
  next: Node | null = null
  value: number = 0

  constructor (value: number) {
    this.value = value
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null
  tail: Node | null = null
  size: number = 0

  addFirst (value: number) {
    const node = new Node(value)

    if (this.head === null) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  addLast (value: number) {
    const node = new Node(value)

    if (this.head === null) {
      this.head = this.tail = node
    } else {
      if (this.tail !== null) this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  get length (): number {
    return this.size
  }

  at (index: number): Node {
    let counter = 0
    let current = this.head

    while (current != null) {
      if (counter === index) return current

      current = current.next
      counter++
    }
    throw new Error('Index out of bounds')
  }

  compare (leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    return this.at(leftIndex).value > this.at(rightIndex).value
  }

  swap (leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const leftHand = leftNode.value
    leftNode.value = rightNode.value
    rightNode.value = leftHand
  }

  print (): void {
    let current = this.head

    let list = ''

    while (current !== null) {
      list += current.value + ' '

      current = current.next
    }

    console.log(list)
  }
}
