
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
    }


    // Return a count of the leaf nodes
    // (Note! It's recursive!)
    getLeafNodeCount() {
    }
}


module.exports = BinaryTree;
