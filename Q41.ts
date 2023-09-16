
export const magician:string[]=['ali','umer','ahmad']

export function show_magicians(magician:string[]){
magician.forEach((person)=> {
    console.log(person);
});

}

show_magicians(magician);

