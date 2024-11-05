// Description:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//URL:https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript
function pigIt(str){
    return str.split(' ').map(e => {if (/^[.,:;!?]+$/.test(e)) {return e;}return e.substr(1) + e[0] + 'ay';}).join(' ');
  }