// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); //the reason is that an equality check == and comparision >< >= <= work differently.
console.log(null >= 0); //comparision convert null to a number, treating it as 0.that's why null >= 0 is true and null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check (not only just check the value but also check its datatype)

console.log("2" === 2);
