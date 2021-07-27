  "use strict";
 let number = 0;
hw3:while (number <= 100) {
  if (number > 1) {
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            number++;
            continue hw3;
        }
    }
    console.log(number);
  } 
  number++;
}