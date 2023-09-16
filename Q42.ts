
import {magician,show_magicians} from './Q41'


function make_great(magicians: string[]): void {
    magicians.forEach((element, index, array) => { array[index] = 'Great ' + element; });
}


make_great(magician);
// show-magician is in Q41
show_magicians(magician);
