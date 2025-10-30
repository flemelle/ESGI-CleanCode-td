import { describe } from "vitest";


describe("YAMS", () => {
    it.each([
        ["Brelan", 28],
        ["Carré", 35],
        ["Full", 30],
        ["Grande suite", 40],
        ["YAMS", 50]
    ])("Should return %s given %s", (expected, input) => {
        expect(test(input)).toBe(expected);
    });
});



/* 
describe("Sample Test", () => {
    it("Should pass", () => {
        expect(true).toBe(true);
    });
}); */