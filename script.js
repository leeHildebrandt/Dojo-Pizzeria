// Function to create a pizza object
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}
// Function to create a random pizza
function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
    var sauceTypes = ["traditional", "marinara", "pesto", "alfredo"];
    var cheesesOptions = [["mozzarella"], ["mozzarella", "cheddar"], ["mozzarella", "feta"], ["mozzarella", "parmesan"]];
    var toppingsOptions = [
        ["pepperoni", "sausage"],
        ["mushrooms", "olives", "onions"],
        ["chicken", "spinach", "tomatoes"],
        ["bacon", "pineapple", "jalapenos"],
        ["peppers", "ham", "garlic"]
    ];

    var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var randomCheeses = cheesesOptions[Math.floor(Math.random() * cheesesOptions.length)];
    var randomToppings = toppingsOptions[Math.floor(Math.random() * toppingsOptions.length)];

    return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1:", pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2:", pizza2);

var pizza3 = pizzaOven("thin crust", "pesto", ["mozzarella", "cheddar"], ["chicken", "spinach", "tomatoes"]);
console.log("Pizza 3:", pizza3);

var pizza4 = pizzaOven("stuffed crust", "alfredo", ["mozzarella", "parmesan"], ["bacon", "pineapple", "jalapenos"]);
console.log("Pizza 4:", pizza4);

// Create a random pizza using the randomPizza function
var randomGeneratedPizza = randomPizza();
console.log("Random Generated Pizza:", randomGeneratedPizza);