// const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addNode(this.head, data);

    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;

      if (data < node.data) node.left = addNode(node.left, data);
      else node.right = addNode(node.right, data);

      return node;
    }
  }

  has(data) {
    return searchData(this.head, data);

    function searchData(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      return data < node.data
        ? searchData(node.left, data)
        : searchData(node.right, data);
    }
  }

  find(data) {
    let node = this.head;
    return findData(node, data);

    function findData(node, data) {
      if (!node) return null;
      if (data === node.data) return node;
      if (data < node.data) node = findData(node.left, data);
      else node = findData(node.right, data);

      return node;
    }
  }

  remove(data) {
    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      if (data === node.data) {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxNodeFromLeft = node.left;
        while (maxNodeFromLeft.right) {
          maxNodeFromLeft = maxNodeFromLeft.right;
        }
        node.data = maxNodeFromLeft.data;

        node.left = removeNode(node.left, maxNodeFromLeft.data);
        return node;
      }
    }
  }

  min() {
    // return maxData(this.head)
    // function maxData(node) {
    //   return node.left ? maxData(node.left) : node.data;
    // }
    return this.#maxMin(this.head, 'left');
  }

  max() {
    // return maxData(this.head)
    // function maxData(node) {
    //   return node.right ? maxData(node.right) : node.data;
    // }
    return this.#maxMin(this.head, 'right');
  }

  #maxMin(node, direction) {
    return node[direction] ? this.#maxMin(node[direction], direction) : node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
