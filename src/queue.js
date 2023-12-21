// const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.quereHead = null;
    this.quereLast = null;
  }

  getUnderlyingList() {
    return this.quereHead;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.quereHead) {
      this.quereLast.next = node;
      this.quereLast = node;
    } else {
      this.quereHead = node;
      this.quereLast = node;
    }
  }

  dequeue() {
    const firstElementValue = this.quereHead.value;
    this.quereHead = this.quereHead.next;
    return firstElementValue;
  }
}

module.exports = {
  Queue,
};
