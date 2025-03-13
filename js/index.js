//finding life in weeks

function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  var lifeSpan = 90,
    maxAgeInDays,
    maxAgeInWeeks,
    maxAgeInMonths;
  maxAgeInDays = 365 * lifeSpan;
  maxAgeInWeeks = 52 * lifeSpan;
  maxAgeInMonths = 12 * lifeSpan;

  var remainingDays, remainingWeeks, remainingMonths, result;
  remainingDays = maxAgeInDays - age * 365;
  remainingWeeks = maxAgeInWeeks - age * 52;
  remainingMonths = maxAgeInMonths - age * 12;
  result = console.log(
    "You have " +
      remainingDays +
      " days, " +
      remainingWeeks +
      " weeks, and " +
      remainingMonths +
      " months left."
  );

  return result;

  /*************Don't change the code below**********/
}

lifeInWeeks(30);

//creating a function to select who pays at random.
function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.
  var name, randomNo;
  randomNo = Math.floor(Math.random() * names.length);
  name = names[randomNo];

  console.log(name + " is going to buy lunch today!");

  return name + " is going to buy lunch today!";

  /******Don't change the code below*******/
}

whosPaying(["Angela", "Ben", "jenny", "Micheal", "Chloe"]);

//creating a fibonacci generator
function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  // Write your code here:
  var fibArray = [];

  if (n === 1) {
    fibArray = [0];
  } else if (n >= 2) {
    fibArray = [0, 1];
  }

  for (var i = 2; i < n; i++) {
    var fibPrev = fibArray[i - 1];
    var fibNext = fibArray[i - 2];
    fibArray.push(fibPrev + fibNext);
  }

  console.log(fibArray);

  // Return an array of Fibonacci numbers starting from 0.
  return fibArray;

  //Do NOT change any of the code below 👇
}

fibonacciGenerator(10);
