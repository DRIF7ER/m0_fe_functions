// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
/** The includes() method is calling on the string "Hello World".
 * The argument "Hello" is passed; includes() method evaluates if the argument is present in the string and riturns either true or false.
 * The return value is "true".
 */


"Hello World".endsWith("Hello");
/** The endWith() method is calling on the string "Hello World".
 * The argument "Hello" is passed; the method evaluates if the argument is true or false as related to the called upon string.
 * The return value is "false".
 */


"Hello World".endsWith("rld");
/** The endWith() method is calling on the string "Hello World".
 * The argument "rld" is passed; the method evaluates if the argument is true or false as related to the called upon string.
 * The return value is "true".
 */



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

/** The toUpperCase() method is calling on the thisIsAnExample variable, which is storing a statement string.
 * There is no argument passed to the method as its job is to capitalize all text.
 * The method returns "MY NAMING CONVENTIOLNS NEED WORK..." and this is printed in the terminal window.
 */
var thisIsAnExample = "My naming conventions need work...";
console.log(thisIsAnExample.toUpperCase());

/** The slice() method is calling on the anotherExample variable, which is storing a statement string.
 * There are 2 arguments passed through the method which are index positons in the variable.
 * The method evaluates the variable and the console log statement prints out the range of characters as indicated by the specified index positions.
 * The printed return in the terminal window is "it secret; keep it".
 */
var anotherExample = "Keep it secret; keep it safe."
console.log(anotherExample.slice(5, 24))



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

/** The indexOf() method calls on the guardians variable which consists of an array of 3 elements.
 * The argument of "Hunter" is passed to the method which evaluates the position of the specified element with the array.
 * The console log statement then prints the indexed position of the element into the terminal window.
 * The printed return in this case is "0".
 */
var guardians = ["Hunter", "Warlock", "Titan"]
console.log(guardians.indexOf("Hunter"))

/** The toString() method calls on the guardians variable which consists of an array of 3 elements.
 * There is no argument passed to the method as its job is to convert the array into a string.
 * The console log statement then prints out the array as text in the terminal window.
 * The printed return in this case is "Hunter,Warlock,Titan".
  */
console.log(`A Vanguard Fireteam usually consts of a ${guardians.toString( )} respectively.`)