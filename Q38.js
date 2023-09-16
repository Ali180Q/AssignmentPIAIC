"use strict";
const describeCity = (city, country = "Latvia") => `${city} is in ${country}.`;
console.log(describeCity("Karachi", "Pakistan"));
console.log(describeCity("Paris", "France"));
console.log(describeCity("Sydney"));
