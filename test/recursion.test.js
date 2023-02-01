const { factorialUp, isPrime, reverse } = require("../src/recursion");

describe("Recursion", () => {
    describe("reverse()", () => {
        test("should reverse a string", () => {
            expect( reverse('abcde') ).toBe('edcba');
            expect( reverse('#') ).toBe('#');
            expect( reverse('') ).toBe('');
        });
    });

    describe("factorialUp()", () => {
        test("should compute factorial from 1 up to N", () => {
            expect( factorialUp(5) ).toBe(120);
            expect( factorialUp(1) ).toBe(1);
        });
    });

    describe("isPrime()", () => {
        test("should return true for prime numbers", () => {
            expect( isPrime(2) ).toBe(true);
            expect( isPrime(5) ).toBe(true);
            expect( isPrime(11) ).toBe(true);
            expect( isPrime(6143) ).toBe(true);
        });

        test("should return false for non-prime numbers", () => {
            expect( isPrime(4) ).toBe(false);
            expect( isPrime(21) ).toBe(false);
            expect( isPrime(195) ).toBe(false);
            expect( isPrime(10001) ).toBe(false);
        });
    });
});
