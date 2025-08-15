
// task 1

let text = "   JavaScript is cool with js   ";
console.log("Original String:", `"${text}"`);
console.log("Original Length:", text.length);

let trimmed = text.trim();
console.log("Trimmed String:", `"${trimmed}"`);
console.log("Trimmed Length:", trimmed.length);

console.log("Uppercase:", trimmed.toUpperCase());
console.log("Lowercase:", trimmed.toLowerCase());

console.log("First Character:", trimmed.charAt(0));
console.log("Last Character:", trimmed.charAt(trimmed.length - 1));

console.log("Index of 'js':", trimmed.indexOf("js"));

console.log("First 10 characters:", trimmed.slice(0, 10));

let replaced = trimmed.replace("js", "JavaScript");
console.log("After Replace:", replaced);

let finalString = replaced.concat(" - DONE");
console.log("Final String:", finalString);


// task 2
var myName = "Smash";
let myAge = 21;
const birthYear = 2004;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Birth Year:", birthYear);



// task 3
let myString = "Hello World";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined;

console.log(myString, "-", typeof myString);
console.log(myNumber, "-", typeof myNumber);
console.log(myBoolean, "-", typeof myBoolean);
console.log(myNull, "-", typeof myNull);
console.log(myUndefined, "-", typeof myUndefined);

// task 4
let strNum = "42";
let numToStr = 99;
let zeroValue = 0;
let emptyStr = "";

let convertedNumber = Number(strNum);
console.log(convertedNumber, "-", typeof convertedNumber);

let convertedString = String(numToStr);
console.log(convertedString, "-", typeof convertedString);

let booleanFromZero = Boolean(zeroValue);
console.log(booleanFromZero, "-", typeof booleanFromZero);

let booleanFromEmpty = Boolean(emptyStr);
console.log(booleanFromEmpty, "-", typeof booleanFromEmpty);


// task 5
let x = 10;
console.log("Initial value:", x);
x += 5;
console.log("After x += 5:", x);
x -= 3;
console.log("After x -= 3:", x);
x *= 2;
console.log("After x *= 2:", x);
x /= 4;
console.log("After x /= 4:", x);
x %= 3;
console.log("After x %= 3:", x);
x++;
console.log("After x++:", x);
--x;
console.log("After --x:", x);


// task 6
let a = 5;
let b = "5";
let c = 0;

console.log("a == b:", a == b);     
console.log("a === b:", a === b);   
console.log("a != b:", a != b);     
console.log("a !== b:", a !== b);   
console.log("a > 3 && c:", a > 3 && c); 
console.log("a > 3 || c:", a > 3 || c); 
console.log("!c:", !c); 

// task 7
const score = 73;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

console.log(score >= 40 ? "Pass" : "Fail");

// task 8
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Loop complete (for loop)");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
console.log("Loop complete (while loop)");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
console.log("Loop complete (do...while loop)");


// task 9
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}   



// task 10
let name = "Riya";
let items = 3;
let pricePerItem = 100;
let total = items * pricePerItem;

console.log(`Hello ${name},
You purchased ${items} items.
Price per item: Rs.${pricePerItem}
Total: Rs.${total}`);









