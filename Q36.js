"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShirt = void 0;
const makeShirt = (size = "Large", message = "I love TypeScript") => `You have ordered a ${size} shirt with the following message: "${message}"`;
exports.makeShirt = makeShirt;
console.log((0, exports.makeShirt)("Small", "Im best !"));
