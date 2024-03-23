// var c = 300;   //global scope
// //aap jo bhi value likhege global scope m wo available hoti h block scope m but block scope ki value nhi available nhi hoti h global m

// let a = 300;  //result will be 300 yeah controversy nhi karega 
// if(true){
//     let a = 10
//     const b = 20   //block scope
//     var c = 30
//     console.log("inner", a);
// }
// console.log(a);    //a and b will be undefined because because the are only in block not outside of the block
//console.log(b);
// console.log(c);   //var will print outside the block

var p = 50;
function value(){
    let x = 10;
    const y = 20;
    var z = 30;
    console.log("value", p); //nhi print hoga
}
// console.log(x);  //nhi chalega
// console.log(y);    //nhi chalega
// console.log(z);    //yeah bhi nhi chalega
console.log("value", p);  //print hoga