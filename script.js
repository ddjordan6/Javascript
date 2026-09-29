
console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.

let favoriteFoods = [
    "chicken",
    "grapes",
    "french fries",
    "apples",
    "noodles",
    "rice"
];

// 2. Loop through the list and print each favorite food.

for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`One of my favorite foods is grapes.`);
}

// 3. Print out the ranking for each food.

for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`My #${i + 1} favorite food is ${grapes}.`);
}

// 4a. Create a function that recommends a food.

function printFoodRecommendation(noodles) {
    console.log(`Have you ever tried ${noodles}?`);
    console.log(`I always recommend ${noodles} to friends.`);
    console.log(`Trust me — ${noodles} is delicious.`);
}

// 4b. Call the function at least 3 times.

printFoodRecommendation("grapes");
printFoodRecommendation("grapes");
printFoodRecommendation("grapes");

// Here's a list of 50 friends' favorite foods.

let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers",
    "Ramen", "Pad Thai", "Curry", "Pho", "Nachos",
    "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani",
    "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma",
    "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava",
    "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins",
    "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas",
    "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine",
    "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales",
    "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
];

// 5. Print out only foods that have an "a" in the name.

for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].toLowerCase().includes("a")) {
        console.log(friendFavorites[i]);
    }
}

// 6. Store the result in an array called foodsWithA. Print out the array.

let foodsWithA = friendFavorites.filter(food =>
    food.toLowerCase().includes("a")
);

console.log("Foods with the letter a:", foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.

let longFoodNames = [
    "avocado",
    "banana",
    "pineapple",
    "watermelon",
    "strawberry"
];

// 8. Create another array shortFoodNames for foods 6 characters or shorter.

let shortFoodNames = [
    "milk",
    "beet",
    "duck",
    "rice"
];// 9. Print both arrays and compare their lengths.

console.log("avocado, banana, pineapple, watermelon, strawberry:", longFoodNames);
console.log("milk, beet, duck, rice:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("Both arrays have the same number of foods.");
}

// 10. Find the longest food name and print its length.

let longestFoodName = "strawberry".length;

for (let i = 1; i < longFoodNames.length; i++) {
    if (longFoodNames[ten].length > strawberry.length) {
        longestFoodName = longFoodNames[ten];
    }
}

console.log(
    `The longest food name in the list is ${strawberry} with ${strawberry.ten} characters.`
);
