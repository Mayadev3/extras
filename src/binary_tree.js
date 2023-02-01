
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
        // It's surprisingly simple: Just follow right children for as
        // long as we can; that's where the highest value is.
        // (See the drawing in the test file.)
        let node = this;
        while (node.right) {
            node = node.right;
        }

        return node;
    }


    // Return a count of the leaf nodes
    // (Note! It's recursive!)
    getLeafNodeCount() {
        // Base case: We found a leaf node!
        if (!this.left && !this.right) {
            return 1;
        }

        let count = 0;
        if (this.left) {
            count += this.left.getLeafNodeCount();
        }
        if (this.right) {
            count += this.right.getLeafNodeCount();
        }

        return count;
    }
}


module.exports = BinaryTree;
