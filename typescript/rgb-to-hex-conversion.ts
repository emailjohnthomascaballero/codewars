// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// additional tips:
// toString(radix)
// radix	Optional.
// The base to use.
// Must be an integer between 2 and 36.
// Base 2 is binary
// Base 8 is octal
// Base 16 is hexadecimal.

export function rgb(r: number, g: number, b: number): string {
  // return `${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toUpperCase();
  // return r.toString().padStart(2, "0")
  // return b.toString(16).padStart(2, "0")
  return [r, g, b].map(num => num < 0 ? 0 : num > 255 ? 255 : num).map(num => num.toString(16).padStart(2, "0")).join("").toUpperCase();
}

console.log(rgb(0, 0, -20), "000000");
console.log(rgb(255, 255, 255), "FFFFFF");
console.log(rgb(255, 255, 300), "FFFFFF");
console.log(rgb(148, 0, 211), "9400D3");
