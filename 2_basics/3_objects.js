//singleton
//object.create => yeah constructor ki help se banta h or iss singleton wala bolte h 

//object literals or yaha jo curly brackets h unko bolte object

const mySym = Symbol("key1")


const JsUser = {
    name: "Khushi",
    "full name": "Khushi Dadhich",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "khushi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// console.log(JsUser.email); //1st to access object
// console.log(JsUser["email"]); //2nd way to access object
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "khushi@chatgpt.com"
//Object.freeze(JsUser) //by appling freeze we can't make further changes
JsUser.email = "khushi@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`) //yeah wala by referal diya gaya h [`iss sign se hum karte h string interpilater] or jab same object ko refer karna h too this ka use karege
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());