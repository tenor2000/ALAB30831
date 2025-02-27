// Part 2: Find prime number

// Brute Force with just loops, there is definitely a better way.

let inputNum = 32;

let potentialPrime = inputNum;

SearchLoop: while (true) {
  let divisor = inputNum - 1;
  while (divisor >= 0) {
    // Search: Check all numbers before potentialPrime if divides evenly
    if (divisor == 1) {
      // if it gets to 1, its a Prime, end search and
      console.log(potentialPrime);
      break SearchLoop;
    }

    if (potentialPrime % divisor == 0) {
      // If its divisible then no longer need to evaluate further break this avenue of pursuit
      break;
    }

    divisor--;
  }
  potentialPrime++; // potentialPrime did not pan out, go to the next one.
  divisor = potentialPrime - 1; // reset divisor for the new potentialPrime
}
