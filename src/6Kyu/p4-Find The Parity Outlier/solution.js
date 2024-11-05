// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

//URL:https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript
function findOutlier(integers) {
    let counte = [];
    let counto = [];
    
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        counte.push(integers[i]);
      } else {
        counto.push(integers[i]);
      }
    }
    if (counte.length > 1) {
      return counto[0];
    } else {
      return counte[0]; 
    }
  }