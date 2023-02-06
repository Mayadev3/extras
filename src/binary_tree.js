/******
 * Binary Search Trees
 ******/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new BinaryTree(value);
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new BinaryTree(value);
      }
    }
  }

  // Return the node with the highest value in the tree
  findMaxValueNode() {
    //check if there is a node on the right,  delegate down the right side, if there is no right node to delegate down then return the root
    if (this.right) {
      return this.right.findMaxValueNode(); //with delegation it goes down the tree and when it reaches the leaf, it echos back what it has found to the root
    } else if (!this.right) {
      return this;
    }
  }

  // Return a count of the leaf nodes
  // (Note! It's recursive!)
  //jim says it is recursive meaning there is a function inside a method or a function inside another function
  getLeafNodeCount() {
    //getLeafNodeCount() is a method NOT a function
    let result = [];

    function traverse(node) {
      //this is a function inside the method..so we put node.right inside the traverse NOT this.right.traverse()
      if (node.right) {
        traverse(node.right);
      }
      if (node.left) {
        traverse(node.left);
      }

      if (node.right === null && node.left === null) {
        result.push(node);
      }
      return result;
    }
    traverse(this);
    return result.length;
  }
}

module.exports = BinaryTree;
