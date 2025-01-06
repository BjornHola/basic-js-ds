const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(values = []) {
    this.head = null;
    this.length = 0;

    
    values.forEach(value => this.append(value));
  }

  
  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    return this;
  }

  
  removeKFromList(k) {
    if (!this.head) {
      return null;
    }

    
    while (this.head && this.head.value === k) {
      this.head = this.head.next;
      this.length--;
    }

    let current = this.head;
    while (current && current.next) {
      if (current.next.value === k) {
        current.next = current.next.next;
        this.length--;
      } else {
        current = current.next;
      }
    }
    return this;
  }
}


const list = new SinglyLinkedList([3, 1, 2, 3, 4, 5]);

console.log(list); 
list.removeKFromList(3); 
console.log(list);

module.exports = {
  removeKFromList
};
