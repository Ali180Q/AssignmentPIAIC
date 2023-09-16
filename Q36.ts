export const makeShirt = (size = "Large", message = "I love TypeScript") =>
  `You have ordered a ${size} shirt with the following message: "${message}"`;
 
console.log(makeShirt("Small", "Im best !"));
