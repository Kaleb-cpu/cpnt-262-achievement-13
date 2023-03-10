// document selector
let output = document.querySelector(".exerciseone");
/* Exercise 1 
Using the reverse array method to reverse the order of the index inside the array
*/

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
const arrReversed = arr.reverse();
console.log(arrReversed);

// output to html page
output.innerHTML = arrReversed;

// document selector
output = document.querySelector(".exercisetwo");
/* Exercise 2
Using a for loop to print all even numbers
the percent sign is used as an operator to make divisible by two
*/
const n = 22;

for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
  // output to html page
output.innerHTML = i;
}

// document selector
output = document.querySelector(".exercisethree");
/* Exercise 3
Using a for.... of loop to print the sum of all elements in the following array
*/
let integers = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let sum = 0;

for (let item of integers) {
  console.log(item);

  sum = sum + item;
}
console.log(`The sum of all the integers is ${sum}`);

// output to html page
output.innerHTML = `The sum of all the integers is ${sum}`;
