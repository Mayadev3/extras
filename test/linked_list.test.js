const LinkedList = require("../src/linked_list");

let linkedList = null;

describe("LinkedList", () => {
    beforeEach(() => {
        linkedList = new LinkedList(1);
        linkedList.addToTail(6);
        linkedList.addToTail(2);
        linkedList.addToTail(5);
        linkedList.addToTail(3);
        linkedList.addToTail(4);
    });

    describe("getTotal()", () => {
        test("return the total of all node values", () => {
            expect( linkedList.getSum() ).toBe(21);
        });
    });

    describe("toArray()", () => {
        test("convert the list into an array of the values", () => {
            expect( linkedList.toArray() ).toEqual([1, 6, 2, 5, 3, 4]);
        });
    });

    describe("isEqual()", () => {
        test("compare two equal lists", () => {
            let list2 = new LinkedList(1);
            list2.addToTail(6);
            list2.addToTail(2);
            list2.addToTail(5);
            list2.addToTail(3);
            list2.addToTail(4);
            expect( linkedList.isEqual(list2) ).toBe(true);
        });

        test("compare two unequal lists of the same length", () => {
            let list2 = new LinkedList(1);
            list2.addToTail(6);
            list2.addToTail(2);
            list2.addToTail(7);
            list2.addToTail(3);
            list2.addToTail(4);
            expect( linkedList.isEqual(list2) ).toBe(false);
        });

        test("compare two unequal lists of different lengths", () => {
            let list2 = new LinkedList(1);
            list2.addToTail(6);
            list2.addToTail(2);
            list2.addToTail(7);
            list2.addToTail(3);
            expect( linkedList.isEqual(list2) ).toBe(false);
        });
    });

    describe("isPalindrome()", () => {
        test("test palindrome with even number of nodes", () => {
            let plist = new LinkedList(1);
            plist.addToTail(2);
            plist.addToTail(3);
            plist.addToTail(3);
            plist.addToTail(2);
            plist.addToTail(1);
            expect( plist.isPalindrome() ).toBe(true);
        });

        test("test palindrome with odd number of nodes", () => {
            let plist = new LinkedList(1);
            plist.addToTail(2);
            plist.addToTail(3);
            plist.addToTail(2);
            plist.addToTail(1);
            expect( plist.isPalindrome() ).toBe(true);
        });

        test("test list that isn't a palindrome ", () => {
            let plist = new LinkedList(1);
            plist.addToTail(2);
            plist.addToTail(3);
            plist.addToTail(4);
            plist.addToTail(1);
            expect( plist.isPalindrome() ).toBe(false);
        });
    });

    describe("sort()", () => {
        test("sort the list in place", () => {
            linkedList.sort();
            expect( linkedList.toArray() ).toEqual([1, 2, 3, 4, 5, 6]);
        });
    });
});
