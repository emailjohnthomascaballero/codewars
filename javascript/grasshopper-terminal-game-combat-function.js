// Grasshopper - Terminal game combat function

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  let total = health - damage;
  return total < 0 ? 0 : total;
}

console.log(combat(5, 5));
console.log(combat(30, 5));
