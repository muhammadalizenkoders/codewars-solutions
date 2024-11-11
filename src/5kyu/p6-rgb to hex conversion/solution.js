// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"
// URL:https://www.codewars.com/kata/513e08acc600c94f01000001/javascript
const componentToHex = (c) => {
    const hex = c.toString(16).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  const clamp = (value) => {
    return Math.max(0, Math.min(255, value));
  }
  
  function rgb(r, g, b) {
      r = clamp(r);
      g = clamp(g);
      b = clamp(b);
      
      return componentToHex(r) + componentToHex(g) + componentToHex(b);
  }