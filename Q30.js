"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
exports.users = ['admin', 'Aly', 'Aneeq', 'Saim', 'Takla'];
for (const user of exports.users) {
    var greet = user === '\nadmin' ? `hello ${user} would you like to see a status report`
        : `\nhello ${user} thank you for logging for again`;
    console.log(greet);
}
