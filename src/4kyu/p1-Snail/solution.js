// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// URL:https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

snail = function(array) {
    let listOfNumbers = [];
    
    while (array.length) {
        listOfNumbers = listOfNumbers.concat(array.shift());
        array.forEach(row => listOfNumbers.push(row.pop()));
        
        if (array.length) {
            listOfNumbers = listOfNumbers.concat(array.pop().reverse());
        } 
        for (let i = array.length - 1; i >= 0; i--) {
            listOfNumbers.push(array[i].shift());
            console.log(array[i])
        }
      
    }
    
    return listOfNumbers;
}


// snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8]])