// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName(){console.log("Hello, what is your name?")};

askForName();

/** I removed some unecessary spaces and added in some semi-colons for buttoning up the used space.
 * Unsure as to what else I could do as the code works as specified. 
 */


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

/** I created a console log so that the function could be displayed in the terminal window.
*/


// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season")
};

makeFreshPesto();

/** I fixed the end of the function so that it was more distictive as to where the function code ended.
 * Again though I feel like I'm missing something as that's all I changed because the code still did what it was supposed to.
 */


//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

console.log(average(37, 45))

/** Added a console log to invoke the function so that an answer would be displayed in terminal window. */