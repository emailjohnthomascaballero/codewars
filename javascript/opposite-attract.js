// Opposites Attract

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // let petal1 = flower1;
  // let petal2 = flower2;
  // if (petal1 % 2 == 0 && petal2 % 2 == 0) {
  //   return false;
  // } else {
  //   return true;
  // }

  return flower1 % 2 == 0 && flower2 % 2 == 0 || flower1 % 2 != 0 && flower2 % 2 != 0 ? false : true;
}

// let even = 10;
// let ans = even % 2;

// if (ans == 0) {
//   console.log('even');
// } else {
//   console.log('odd');
// }

console.log(lovefunc(685, 871));