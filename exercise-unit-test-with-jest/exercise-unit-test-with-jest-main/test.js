const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("1.07 dollars should be 156.5 yenes", function() {
    const yenes = fromDollarToYen(1.07);
    expect(yenes).toBe(156.5);
});

test("156.5 yenes should be 0.87 pounds", function() {
    const pounds = fromYenToPound(156.5);
    expect(pounds).toBe(0.87);
});