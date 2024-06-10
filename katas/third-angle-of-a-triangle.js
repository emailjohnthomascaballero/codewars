// Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// FORMULA: Use the triangle sum theorem to prove the third angle theorem. For example, two triangles each have angles measuring 45 and 71. To find the measure of the third angle, subtract: 180 - 45 - 71 = 64. This calculation works for both triangles.

// function otherAngle(a, b) {
//   return 180 - a - b;
// }

const otherAngle = (a, b) => 180 - a - b;

console.log(otherAngle(30, 60));