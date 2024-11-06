// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//URL: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
    const length = s.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return s[middleIndex - 1] + s[middleIndex];
    } else {
        return s[middleIndex];
    }
}