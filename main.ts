let personName = "hafiz waqas";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char)=> char.toUpperCase()));