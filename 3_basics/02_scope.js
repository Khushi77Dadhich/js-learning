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

function one(){
    const username = "khushi"
    function two(){
        const website = "me&you@gmail.com"
        console.group(username);
    }
    //console.log(website);  //website is not defined because wesite ka scope child function tak tha  
    two(); //username wala console work karega because child function access kr sakta h parent function ko
}
one();

if(true){
    const username1 ="khushi";
    if(username1 == 'khushi'){
        const website1 = "youtube";
        console.log(username1 + website1);
    }
    //console.log(website1); //yeah scope ke bahar hai
}
//console.log(username1); //yaeh bhi scope ke bahar h 

console.log(addone(7));  //isme koi problem nhi h yeah chalega

function addone(num){
    return num + 1;     //just a normal function
}
// console.log(addone(7));

//console.log(addtwo(7)); //yaha error aayega because aapne yaha declearation ke sath sath hold bhi kiya h 
const addtwo = function(num) {
    return num + 2;   //sometime it may called expression because it is just like a variable 
}
//console.log(addtwo(7));