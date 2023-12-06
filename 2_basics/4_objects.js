//const tinderUser = new object() //singleton object with the help of constructor
const tinderUser = {} //non-singleton object with literals

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "dadhich@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Khushi",
            lastname: "Dadhich"
        }
    }
}

console.log(regularUser.fullname);