//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString);
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23) //month jo hote h javascript m wo 0(zero) se start hote h 
//console.log(myCreatedDate.toDateString());
//let myCretedDate = new Date(2023, 0, 23, 5, 3)
//console.log(myCreatedDate.toLocaleString());
//let myCreatedDate = new Date("2023-01-14") //yaha humne date format m date di h isliye 1 se month ki starting karege
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()); 
//+++++++++++++TIME+++++++++
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //humko seconds m mil gaya

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long", //control+space karege too properties dikhegi
})