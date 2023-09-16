import { users } from "./Q30";

for(let i:number=0;i<users.length;i++){
    var greet=users[i]==='\nadmin'?`hello ${users[i]} would you like to see a status report`
   :`\nhello ${users[i]} thank you for logging for again`
   console.log(greet);

   users.splice(i,users.length);
}
if (users.length===0){console.log(`array is empty`)}