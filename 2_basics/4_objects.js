//const tinderUser = new object() //singleton object with the help of constructor
const tinderUser = {} //non-singleton object with literals

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "dadhich@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Khushi",
            lastname: "Dadhich"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = { obj1, obj2 } 
//const obj4 = Object.assign({}, obj1, obj2, obj3 ) //copy the value of all of the enumerable own properties from one or more source objects to a target object. return the target object.

const obj4 = {...obj1, ...obj2, ...obj3} //we will maximum time use this for object
//console.log(obj4);


const users = [
    {
        id: 1, 
        email: "k@gmail.com"
    },
    {
        id: 1, 
        email: "k@gmail.com"
    },
    {
        id: 1, 
        email: "k@gmail.com"
    },
]

users[1].email
console.log