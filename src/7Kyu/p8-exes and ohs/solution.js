// Description:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// URL:https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
function XO(str) {
    str = str.toUpperCase();
    let x = 0; 
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'O') {
            o++;
        } else if (str[i] === 'X') {
            x++;
        }
    }
    return x === o;
}