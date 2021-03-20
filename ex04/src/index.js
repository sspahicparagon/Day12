// Only change code below this line

function sumFibonnaci(num) {

    if(num < 0) {
        return 0;
    }
    let i = 1;
    let j = 1;
    let sum = 0;
    while(i <= num) {
        console.log("Value: " + i);
        if(i % 2 != 0) {
            sum += i;
        }

        let temp = j;
        j += i;
        i = temp;
    }
    return sum;
}

// Only change code above this line

console.log(sumFibonnaci(1)); // Change this line
console.log(sumFibonnaci(10));
console.log(sumFibonnaci(20));
console.log(sumFibonnaci(4));
console.log(sumFibonnaci(-5));


module.exports = sumFibonnaci;