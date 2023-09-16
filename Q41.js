"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_magicians = exports.magician = void 0;
exports.magician = ['ali', 'umer', 'ahmad'];
function show_magicians(magician) {
    magician.forEach((person) => {
        console.log(person);
    });
}
exports.show_magicians = show_magicians;
show_magicians(exports.magician);
