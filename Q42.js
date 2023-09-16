"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q41_1 = require("./Q41");
function make_great(magicians) {
    magicians.forEach((element, index, array) => { array[index] = 'Great ' + element; });
}
make_great(Q41_1.magician);
// show-magician is in Q41
(0, Q41_1.show_magicians)(Q41_1.magician);
