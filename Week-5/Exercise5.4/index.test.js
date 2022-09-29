// test the app 

const MathOperations = require('./index');

describe("Math operations testing", () => {
    test("Should Pass Addition test a = 20, b = 13 returns 33", () => {
      const res = MathOperations.sum(20, 13);
      expect(res).toBe(33);
      expect(res).not.toBe(20)
    });
  
    test("Should Pass Subtraction test a = 20, b = 13 returns 7", () => {
      const res = MathOperations.diff(20, 13);
      expect(res).toBe(7);
      expect(res).not.toBe(13)
    });
    test("Should Pass Subtraction test a = 13, b = 20 returns -7", () => {
      const res = MathOperations.diff(13, 20);
      expect(res).toBe(-7);
      expect(res).not.toBe(7)
    });
    test("Should Pass Addition test a = 20, b = 13 returns 260", () => {
      const res = MathOperations.product(20, 13);
      expect(res).toBe(260);
    });
});