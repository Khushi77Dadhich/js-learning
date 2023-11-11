//string can be donated in double and single cots("", '') both way correct
const name = "khushi"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Khushi-Dad-hich')

console.log(gameName[0]);
console.log(gameName.__proto__); //type bata deta h 
//string ke different methods dekh rahe h hum
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //dekh rahe h given index number pr konsa char hai
console.log(gameName.indexOf('h')); //dekh rahe h given char konse index pr hai

const newString = gameName.substring(0,4) //substring m hum koi -ve value nhi de sakte h
console.log(newString);

const anotherString = gameName.slice(-7,4) //slice m hum -ve value bhi de sakte h
console.log(anotherString);

const newStringOne = "  Khushi   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim hamare extra spaces ko khatam kar deta h

const url = "https://khushi.com/khushi%20dadhich"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
console.log(gameName.bold());
console.log(gameName.fontcolor("red"));
console.log(gameName.italics());
console.log(gameName.fontsize(11));
console.log(gameName.repeat());