const calculator = require('./calculator')

describe('plus function', () => {
    test('should return 2 if a = 1 and b = 1', () => {
        const a = 1;
        const b = 1;
        const expected = 2;
        const result = calculator.plus(a, b);
        expect(result).toBe(expected)
    });
});
describe('minus function', () => {
    test('should return 0 if a = 1 and b = 1', () => {
        const a = 1;
        const b = 1;
        const expected = 0;
        const result = calculator.minus(a, b);
        expect(result).toBe(expected)
    });
});
describe('divided function', () => {
    test('should return 2 if a = 4 and b = 2', () => {
        const a = 4;
        const b = 2;
        const expected = 2;
        const result = calculator.divided(a, b);
        expect(result).toBe(expected)
    });
});
describe('multiplied function', () => {
    test('should return 2 if a = 2 and b = 1', () => {
        const a = 2;
        const b = 1;
        const expected = 2;
        const result = calculator.multiplied(a, b);
        expect(result).toBe(expected)
    });
});