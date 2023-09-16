
import { show_magicians } from "./Q41";

const magician:string[]=['ali','umer','ahmad']  
const greatMagician: string[] = make_great([...magician]);


function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
  }
  
  
  console.log("Original Magicians:");
  show_magicians(magician);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagician);
  