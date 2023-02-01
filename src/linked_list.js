
/******
 * Linked Lists
 ******/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(headValue) {
        this.head = new Node(headValue);
        this.tail = this.head;
    }
  

    addToTail(val) {
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
    }


    // Return the sum of all the nodes' values
    getSum() {
    }


    // Return the values of the list as an array
    toArray() {
    }


    // Return true if list2 is equal to this list
    isEqual(list2) {
    }


    // Return true if the list is a palindrome
    isPalindrome() {
    }

    
    // Sort the list without creating new nodes
    sort() {
    }
}  

module.exports = LinkedList;
