// const user = {
//     username: "khushi",
//     price: 777,
//     welcomemessage : function() {
//         console.log(`${this.username} , welcome to khushi world`)
//         console.log(this);
//     }
// }   //this keyword show us the current context batata hai
// user.welcomemessage();
// user.username = "harshi";
// user.welcomemessage();

// function code() {
//     let myname = "khushi"
//     console.log(this.username);
// }
// code();  //output is undefined because we are using it in function

// const codeing = function() {
//     let myname = "khushi"
//     console.log(this.username);
// }
// codeing();  //it is also undefined

const chai = () => {
    let username = "khushi"
    console.log(this);
}

/////////////////arrow function//////////////////////
const addtwonum = (num1 , num2) => {
    return num1 + num2;
}
console.log(addtwonum(7, 5));

co