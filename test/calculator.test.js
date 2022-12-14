const mathOperations = require('../src/calculator');

describe("Calculator Tests", () => {
    test("Soma de 2 números", () => {
        // arrange and act
        var result = mathOperations.sum(1,2)

        // assert
        expect(result).toBe(3);
    });

    test("Subtração de 2 números", () => {
        var result = mathOperations.diff(10,2)
        expect(result).toBe(8);
    });

    test("Multiplicação de 2 números", () => {
        var result = mathOperations.product(2,8)
        expect(result).toBe(16);
    });

    test("divisão de 2 números", () => {
        var result = mathOperations.divide(24,8)
        expect(result).toBe(3);
    });
})