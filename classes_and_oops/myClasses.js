class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const obj = new user("khushi", "khushi@google.com", "123")
console.log(obj.encryptPassword())
console.log(obj.changeUsername())