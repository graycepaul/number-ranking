function numberRank(num1, num2, num3) {
  let largest = num1;
  let smallest = num1;

  if (num2 > largest) {
    largest = num2;
  } else if (num2 < smallest) {
    smallest = num2;
  }

  if (num3 > largest) {
    largest = num3;
  } else if (num3 < smallest) {
    smallest = num3;
  }

  return `The largest number is: ${largest} and the smallest number is: ${smallest}`;
}

console.log(numberRank(15, 7, 873));
