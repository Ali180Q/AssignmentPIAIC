"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q41_1 = require("./Q41");
const magician = ['ali', 'umer', 'ahmad'];
const greatMagician = make_great([...magician]);
function make_great(magicians) {
    return magicians.map((magician) => `${magician} the Great`);
}
console.log("Original Magicians:");
(0, Q41_1.show_magicians)(magician);
console.log("\nGreat Magicians:");
(0, Q41_1.show_magicians)(greatMagician);
