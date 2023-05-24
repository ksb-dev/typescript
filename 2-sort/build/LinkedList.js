"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value) {
        this.next = null;
        this.value = 0;
        this.value = value;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addFirst(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    addLast(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = this.tail = node;
        }
        else {
            if (this.tail !== null)
                this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    get length() {
        return this.size;
    }
    at(index) {
        let counter = 0;
        let current = this.head;
        while (current != null) {
            if (counter === index)
                return current;
            current = current.next;
            counter++;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftHand;
    }
    print() {
        let current = this.head;
        let list = '';
        while (current !== null) {
            list += current.value + ' ';
            current = current.next;
        }
        console.log(list);
    }
}
exports.LinkedList = LinkedList;
