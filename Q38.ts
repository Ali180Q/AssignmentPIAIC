const describeCity = (city: string, country: string = "Latvia"): string =>
  `${city} is in ${country}.`;

console.log(describeCity("Karachi", "Pakistan"));
console.log(describeCity("Paris", "France"));
console.log(describeCity("Sydney"));
