
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
  

    // Give this as a freebee... ;-)
    addToTail(val) {
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
    }


    // Return the sum of all the nodes' values
    getSum() {
        let sum = 0;
        let node = this.head;

        while (node) {
            sum += node.value;
            node = node.next;
        }

        return sum;
    }


    // Return the values of the list as an array
    toArray() {
        let arr = [];
        let node = this.head;

        while (node) {
            arr.push(node.value);
            node = node.next;
        }

        return arr;
    }


    // Return true if list2 is equal to this list
    isEqual(list2) {
        let node1 = this.head;
        let node2 = list2.head;

        while (node1 && node2) {
            if (node1.value !== node2.value) {
                return false;
            }

            node1 = node1.next;
            node2 = node2.next;
        }

        if (node1 || node2) {
            return false;
        }

        return true;
    }


    // Return true if the list is a palindrome
    isPalindrome() {
        let str = this.toArray().join('');
        let revstr = str.split('').reverse().join('');

        return str === revstr;
    }

    
    // Sort the list without creating new nodes
    sort() {
        // Create array with all Node objs
        let objs = [];
        let node = this.head;
        while (node) {
            objs.push(node);
            node = node.next;
        }

        // Now we can easily sort the Node objs by value
        objs.sort((a, b) => a.value - b.value);

        // Update .next pointers to point to next obj in array
        for (let i=0; i<objs.length-1; i++) {
            objs[i].next = objs[i+1];
        }
        objs[objs.length-1].next = null;

        // Update head/tail pointers
        this.head = objs[0];
        this.tail = objs[objs.length-1];
    }
}  

module.exports = LinkedList;
