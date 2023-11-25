const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//*****************Maths*************** 

console.log(Math);
console.log(Math.abs(-4)); //abs means absolute so if we are giving some -ve value we will get +ve 
console.log(Math.round(4.7)); //mtlb round off kr ke dega
console.log(Math.ceil(4.2)); //mtlb agar thora bhi value badi point ke baad too badi hoi value hi dega
console.log(Math.floor(4.2)); //isme kitni bhi bada lo dega too wahi jaise ya agar 4.9 kerge too bhi answer too 9 hi aayega 
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8));

console.log(Math.random()); //mtlb koi bhi random value dega 0-1 ke bich ki
console.log(Math.random()*10); //mtlb *10 krne se .oint ke baad wali digit aage sift ho jayegi
console.log(Math.random()*10 + 1); // iska mtlb b jo bhi value hogi usme 1 badh jayega too ab 0 nhi aayega random value m
console.log(Math.floor(Math.random()*10) + 1); //yeah humko jo bhi value dega wo 1 se 9 ke bich ki hogi

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //isme hum range de dete h ki humko value kaha se kaha tak chaiye