// array:- javascript array are resizeble and contain a mix of different datatype

const myArr = [0, 1, 2, 3, 4, 5] //javascript array are zero indexed
const myHeros = ["Skatiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); //whenever we do copy operation it create shallow copies(means shallow copy of an object is a copy whose roperties share the same reference) deep copy of an object is a copy whose roperties do not share the same reference

// Array metthods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)

console.log(myArr);
