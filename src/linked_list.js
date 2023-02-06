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
    let sum = 0;
    let node = this.head;

    while (node !== null) {
      //here it will not check the tail if i put node.next!== null
      sum += node.value;
      node = node.next;
      //if you put it here you are not adding the first node being the head
    }
    return sum;
  }

  // Return the values of the list as an array
  toArray() {
    let array = [];

    let node = this.head;

    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }

  // Return true if list2 is equal to this list
  isEqual(list2) {
    let node = this.head;
    let otherNode = list2.head;

    //looping through both tests

    while (node !== null && otherNode !== null) {
      if (node.value !== otherNode.value) {
        return false;
      }
      node = node.next;
      otherNode = otherNode.next;
    }

    if (node || otherNode) {
      return false;
    }

    return true;
  }

  // Return true if the list is a palindrome
  isPalindrome() {
    //remember you can NOT compare two arrays and their elements because the positions are different.. you need to change them into a string to compare them

    let array1 = [];
    let array2 = [];

    //create array1
    let node = this.head;
    while (node) {
      array1.push(node.value);
      node = node.next;
    }

    //create array2
    node = this.head; //here we are telling the list to go back to thehead again
    while (node) {
      array2.unshift(node.value);
      node = node.next;
    }
    return array1.toString() === array2.toString();
  }

  // Sort the list without creating new nodes
  sort() {
    //sort doesnt create a new array

    let arr = [];

    let node = this.head;

    while (node) {
      arr.push(node);
      node = node.next;
    }

    //sort nodes based on value
    arr.sort((na, nb) => na.value - nb.value);

    //loop through the array and update .next pointer..since the pointers all got screwed up
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i].next = arr[i + 1];
    }
    //update .next pointer for the last node
    arr[arr.length - 1].next = null;

    console.log(arr);

    //update head and tail pointers
    this.head = arr[0];
    this.tail = arr[arr.length - 1];
  }
}

module.exports = LinkedList;
