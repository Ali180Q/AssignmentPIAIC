"use strict";
const animals = [
    { name: "Dog", statement: "A dog would make a great pet." },
    { name: "Cat", statement: "A cat can be a good companion." },
    { name: "Rabbit", statement: "A rabbit is a cute and cuddly animal." },
];
console.log("List of animals and their statements:");
for (const animal of animals) {
    console.log(animal.name);
    console.log(animal.statement);
}
console.log("\nAny of these animals would make a great pet!");
