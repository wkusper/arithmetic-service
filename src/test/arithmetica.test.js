const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5); 
});

test('20 + 39 is equal to 59', () => {
    expect(add(20, 39)).toBe(59);
});

test('123456789 + 987654321 is equal to 1111111110', () => {
    expect(add(123456789, 987654321)).toBe(1111111110);
});

