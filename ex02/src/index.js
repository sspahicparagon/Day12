// Only change code below this line
function myCounter(n) {
    return helpfullFunction(n, []);

}

function helpfullFunction(n, array) {
    if(n < 1) {
        return [];
    }
    array.push(n);
    helpfullFunction(n-1, array);
    return array;
}

// Only change code above this line

console.log(myCounter(-1)); // Change this line
console.log(myCounter(10));
console.log(myCounter(5));

module.exports = myCounter;