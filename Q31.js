"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q30_1 = require("./Q30");
for (let i = 0; i < Q30_1.users.length; i++) {
    var greet = Q30_1.users[i] === '\nadmin' ? `hello ${Q30_1.users[i]} would you like to see a status report`
        : `\nhello ${Q30_1.users[i]} thank you for logging for again`;
    console.log(greet);
    Q30_1.users.splice(i, Q30_1.users.length);
}
if (Q30_1.users.length === 0) {
    console.log(`array is empty`);
}
