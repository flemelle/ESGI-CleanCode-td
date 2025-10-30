import { describe } from "vitest";


describe("Roman number converter", () => {
    it.each{[
        ["I", 1],
        ["II", 2],
        ["III", 3],
        ["IV", 4],
        ["V", 5],
    ]}("Should return %s given %s", (expected, input) => {
        expect(test(input)).toBe(expected);
    });
});



/* 
describe("Sample Test", () => {
    it("Should pass", () => {
        expect(true).toBe(true);
    });
}); */