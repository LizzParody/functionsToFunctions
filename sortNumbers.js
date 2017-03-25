var numbersArray = [60, 50, 62, 58, 54, 54];

/*function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 === num2){
    return 0;
  } else {
    return -1;
  }
} */

  function compareNumbers(num1, num2) {
    return num1 - num2;
  }

numbersArray.sort(compareNumbers); 
console.log(numbersArray);
