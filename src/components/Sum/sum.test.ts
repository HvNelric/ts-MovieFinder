import sum from "./sum";

test('somme de sum', () => {
    let result = sum(1, 2);
    expect(result).toBe(3)
})