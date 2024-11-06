// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// URL:https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript
function findShort(s){
    let arr=s.split(' ').sort((a, b)=> a.length-b.length);
    return arr[0].length
  }