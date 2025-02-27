// Part 1 FizzBuzz

for (let num = 1; num <= 100; num++) {
  let result = "";

  if (num % 3 == 0) {
    result += "Fizz ";
  }

  if (num % 5 == 0) {
    result += "Buzz";
  }

  if (num % 3 !== 0 && num % 5 !== 0) {
    result = num;
  }

  console.log(result);
}
