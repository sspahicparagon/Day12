// Only change code below this line

function rangeOfNumbers(startN, endN) {

    if(startN > endN) {
        return "The starting number will always be lass than or equal to ending number";
    }

    if(startN == endN) {
        return [startN];
    }

    const array = rangeOfNumbers(startN, endN - 1);
    array.push(endN);

    return array;
}

// Only change code above this line

console.log(rangeOfNumbers(1, 7)); // Change this line
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5,5));
console.log(rangeOfNumbers(7, 5));

module.exports = rangeOfNumbers;