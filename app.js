// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yens
    let valueInEuro = valueInDollar /  1.2
    let valueInYen = valueInEuro * 127.9;
    //return the yen value
    return valueInYen;
}

const fromYentoPound = function(valueInYen){
    // convert the given valueInYen to pounds
    let valueInEuro = valueInYen /  127.9
    let valueInPound = valueInEuro * 0.8;
    //return the pound value
    return valueInPound;
}
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.

console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(3.5));
console.log(fromYentoPound(3.5));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound }