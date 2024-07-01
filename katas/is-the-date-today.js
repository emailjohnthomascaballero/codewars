// Is the date today

// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
  return date.getDay() == new Date().getDay() && date.getUTCDay() == new Date().getUTCDay() && date.getUTCDate() === new Date().getUTCDate();
}

console.log(isToday(new Date()));
