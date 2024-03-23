function addtwonumbers(num1, num2) {
    let result = num1 + num2;
    return result;
    //console.log("hitesh"); this will not execcute because it is written after return statement 
}
const result = addtwonumbers(5, 7);
console.log("result:", result);

function loginmessage(username) {
    return `${username} just log in`
}
console.log(loginmessage("khushi"));

// const result = addtwonumbers(5, 7);
// console.log("result:", result);

function loginmessage(username) {
    if(!username){
        console.log("Please enter a username");
        return
    } 
    return `${username} just log in`
}
console.log(loginmessage("khushi"));

function values(...num1) {  
    return num1   //...this a rest operator we enter multiple value in a function with the help of this
}
console.log(values(200,300,400,500));

const user = {
    username: "khushi",
    price: 199,
}

function userdetial(anyobject){
    console.log(`your user name is ${anyobject.username} and price is ${anyobject.price}`);
}
userdetial(user);

const array = [200, 300, 400, 500]

function printarray(getarray){
    return getarray[1];
}
console.log(printarray(array));
console.log(printarray([300, 400, 500, 600]));