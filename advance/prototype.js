let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function() {
        console.log(`spider power is ${this.spider}`);
    }
}

//prototype will give extra power 
Object.prototype.khushi = function() {
    console.log("khushi is present in all objects")
}

//heroPower.khushi()  //power sabke pass hai
//myHeros.khushi()

let anotherUsername = "Harshi"
String.prototype.trueLength =  function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength()
"Khushi".trueLength()
"Harshvardhan".trueLength()