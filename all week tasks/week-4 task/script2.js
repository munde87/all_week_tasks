// Task 1: 

let cities = ["Delhi", "Mumbai", "Pune", "Nagpur"];
console.log("Third city:", cities[2]);




// Task 2: 

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello("Amit");




// Task 3: 

let items = ["Pen", "Pencil"];
items.push("Eraser");
console.log("Updated items:", items);

// Task 4: 

let fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));



// Task 5: 

document.getElementById("msg").innerText = "Updated Text";



// Task 6: 


let colors = ["red", "blue", "green", "red", "yellow", "red"];
let redCount = colors.filter(color => color === "red").length;
console.log("Number of 'red' colors:", redCount);



// Task 7: 

let paragraphs = document.querySelectorAll(".info");
let colorsList = ["red", "green", "blue"];
paragraphs.forEach((p, i) => {
    p.style.color = colorsList[i];
});
