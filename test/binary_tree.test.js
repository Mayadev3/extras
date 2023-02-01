const BinaryTree = require("../src/binary_tree");

let btree = null;

/*
       20
      /  \
     5   40
    / \    \
   2   8   45
           /
          41
*/

describe("BinaryTree", () => {
    beforeEach(() => {
        btree = new BinaryTree(20);
        btree.add(40);
        btree.add(5);
        btree.add(8);
        btree.add(45);
        btree.add(2);
        btree.add(41);
    });

    describe("findMaxValueNode()", () => {
        test("return the node with the highest value", () => {
            expect( btree.findMaxValueNode().value ).toBe(45);
        });
    });

    describe("getLeafNodeCount()", () => {
        test("return (recursively) the count of leaf nodes", () => {
            expect( btree.getLeafNodeCount() ).toBe(3);
        });
    });
});
