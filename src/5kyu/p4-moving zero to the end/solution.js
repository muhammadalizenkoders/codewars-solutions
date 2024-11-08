Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,9]
// URL:https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
function moveZeros(arr) {
    const n = arr.length;
      const temp = new Array(n);
  
      let j = 0;
  
      for (let i = 0; i < n; i++) {
          if (arr[i] !== 0) {
              temp[j++] = arr[i];
          }
      }
  
      while (j < n)
          temp[j++] = 0;
  
      for (let i = 0; i < n; i++)
          arr[i] = temp[i];
    return temp
  }