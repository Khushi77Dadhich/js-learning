const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newnum = mynum.map( (num) => { return + 10} )
const newnum = mynum.map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )
console.log(newnum);

/////////reduce/////////

const number = [1, 2, 3]
//const mynumber = number.reduce( function(acc, currval) {
//    console.log(`acc ${acc} and currval ${currval}`);
//  return acc + currval
//}, 0)

const mynumber = number.reduce( (acc, curr) => acc + curr, 0 ) 

console.log(mynumber);

const shopping = [
    {
        itemname : "js course",
        itemprice : 2999
    },
    {
        itemname : "C++ course",
        itemprice : 3999
    },
    {
        itemname : "CSS course",
        itemprice : 4999
    },
    {
        itemname : "React course",
        itemprice : 5999
    },
    {
        itemname : "Mobile course",
        itemprice : 6999
    },
    {
        itemname : "java course",
        itemprice : 7999
    },
]

const totalbill = shopping.reduce( (acc,item) => acc + item.price, 0)

console.log(totalbill);