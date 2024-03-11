// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting.
function greeting(){
    var greet = "Hey, how the heck are ya??";
     console.log(greet);
};

greeting()


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name){;
    var name = name;
    console.log(`Hey ${name}! How the heck are ya?`);
}

customGreeting("Lord Farquaad")


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, second, third){;
    var fullName = first + second + third;
    console.log(`Hey ${fullName}! How the heck are ya?`);
}

greetPerson("Scooby ", "Dooby ", "Doo")


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num){;
    var num = num;
    var squared = num ** 2;
    console.log(`The product of ${num} squared is ${squared}`);
}

square(7)


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(num, item){;
    var stock = num;
    var item = item;
     if (stock >= 4){;
        console.log(`${item} is stocked`)};
     if (stock < 4 && stock !== 0){;
        console.log(`${item} is running LOW`)};
     if (stock < 4 && stock === 0){;
        console.log(`${item} is OUT of stock!`)};
}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"