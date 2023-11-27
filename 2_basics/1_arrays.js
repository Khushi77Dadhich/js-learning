// array:- javascript array are resizeble and contain a mix of different datatype

const myArr = [1, 2, 3, 4, 5, 6] //javascript array are zero indexed
const myHeros = ["Skatiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); //whenever we do copy operation it create shallow copies(means shallow copy of an object is a copy whose roperties share the same reference) deep copy of an object is a copy whose roperties do not share the same reference

// Array metthods

myArr.push(7)
myArr.push(8)
myArr.pop()

myArr.unshift(9)
myArr.shift() //shift ho jayega or 0 index pr jo bhi h usko gayab kr dega

console.log(myArr.includes(4)); //true or false m answer dega 
console.log(myArr.indexOf(7)); //batayega kya index no. exist krta h ya nhi

const newArr = myArr.join() //Adds all the elements of an array into a string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) //array same hi raheta h

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3) //splice m pura porsion h nikal jata h jo range mention hoti h uska manupilate ho jata h
console.log("C ", myArr);
console.log(myn2);