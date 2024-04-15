class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const chai = new Teacher("chai", "chai@google.com", "7773")
chai.addCourse()
const mchai = new User("masalachai")
//mchai.addCourse()    //parent can't use child property
mchai.logMe()
chai.logMe() //child parent class ki property use kar sakta hai
