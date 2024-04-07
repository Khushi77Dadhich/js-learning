// const user = {
//     username: "khushi",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetail: function() {
//         //console.log("got user detail");
//         //console.log(`Username: ${user.username}`);
//         //console.log(`Username: ${user}`);
//         console.log(`Username: ${this.username}`);
//     }
// }
//console.log(user.username);
//console.log(user.getUserDetail());

//constructor function
//const promiseOne = new Promise()
//new ketword is constructor function,  usse for making new context
function User(username, Logincount, isLogged) {
    this.username = username
    this.Logincount = Logincount
    this.isLogged = isLogged

    this.greeting = function() {
        console.log(`this is our ${this.username}`);
    }

    //return this      //this is optional as we wish
}
const userOne = new User("Khushi", 77, true);
const userTwo = new User("Ridhima", 7, true);
console.log(userOne);
console.log(userTwo);

//new keyword :  create an empty object called instance
//2} constructor function called by new keyword pack all argument
//3} all the argument injected in it
//4} we got all in our function