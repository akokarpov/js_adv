
const script = require("../../script");

const sum = script.sum;
const extract = script.extract;
const multiply = script.multiply;
const divide = script.divide;

describe("testing 4 functions", () => {
    it("returns 5 for args (2, 3)", () => {
        expect(sum(2, 3)).toBe(5);
    });

    it("returns 50 for args (25, 25)", () => {
        expect(sum(25, 25)).toBe(50);
    });

    it("returns warning for args (type of string, type of number)", () => {
        expect(sum("string", 25)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of number, type of string)", () => {
        expect(sum(25, "string")).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of null, type of number)", () => {
        expect(sum(null, 25)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of undefined, type of string)", () => {
        expect(sum(undefined, "string")).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of number, type of null)", () => {
        expect(sum(25, null)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of string, type of undefined)", () => {
        expect(sum("string", undefined)).toBe("Error: both args must be numbers!");
    });

    it("returns 5 for args (7, 2)", () => {
        expect(extract(7, 2)).toBe(5);
    });

    it("returns 50 for args (100, 50)", () => {
        expect(extract(100, 50)).toBe(50);
    });

    it("returns warning for args (type of string, type of number)", () => {
        expect(extract("string", 25)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of number, type of string)", () => {
        expect(extract(25, "string")).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of null, type of number)", () => {
        expect(extract(null, 25)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of undefined, type of string)", () => {
        expect(extract(undefined, "string")).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of number, type of null)", () => {
        expect(extract(25, null)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of string, type of undefined)", () => {
        expect(extract("string", undefined)).toBe("Error: both args must be numbers!");
    });

    it("returns 9 for args (3, 3)", () => {
        expect(multiply(3, 3)).toBe(9);
    });

    it("returns 0 for args (5, 0)", () => {
        expect(multiply(5, 0)).toBe(0);
    });

    it("returns warning for args (type of string, type of number)", () => {
        expect(multiply("string", 25)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of number, type of string)", () => {
        expect(multiply(25, "string")).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of null, type of number)", () => {
        expect(multiply(null, 25)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of undefined, type of string)", () => {
        expect(multiply(undefined, "string")).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of number, type of null)", () => {
        expect(multiply(25, null)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of string, type of undefined)", () => {
        expect(multiply("string", undefined)).toBe("Error: both args must be numbers!");
    });

    it("returns 1 for args (3, 3)", () => {
        expect(divide(3, 3)).toBe(1);
    });

    it("returns 10 for args (100, 10)", () => {
        expect(divide(100, 10)).toBe(10);
    });

    it("returns warning for args (type of string, type of number)", () => {
        expect(divide("string", 25)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of number, type of string)", () => {
        expect(divide(25, "string")).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of null, type of number)", () => {
        expect(divide(null, 25)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of undefined, type of string)", () => {
        expect(divide(undefined, "string")).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of number, type of null)", () => {
        expect(divide(25, null)).toBe("Error: both args must be numbers!");
    });

    it("returns warning for args (type of string, type of undefined)", () => {
        expect(divide("string", undefined)).toBe("Error: both args must be numbers!");
    });
});