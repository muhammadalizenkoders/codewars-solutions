
// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
//URL: https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript
function highAndLow(numbers) {
    numbers = numbers.split(" ")
    console.log(numbers)
    numbers.sort((a, b) => a - b);
    let lowest = numbers[0];
    let highest = numbers[numbers.length - 1];
    return `${highest} ${lowest}`;
  }
  