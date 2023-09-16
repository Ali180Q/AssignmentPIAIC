 export var users:string[]=['admin','Aly','Aneeq','Saim','Takla']

 for(const user of users){
     var greet=user==='\nadmin'?`hello ${user} would you like to see a status report`
    :`\nhello ${user} thank you for logging for again`
    console.log(greet);
}