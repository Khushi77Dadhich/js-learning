//map iteratable nhi hai


// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }
///////for of is for array
// const greeting = "Hello World";
// for (const greet of greeting) {
//     console.log(`for each char of ${greet}`);
// }

const map = new Map()
    map.set('IN', "India")
    map.set('USA', "United State America")
    map.set('UK', "United Kingdom")

// console.log(map);
for (const [key, value] of map) {
   // console.log(key, ':-', value);
}

////////now we will use for in for print of object
const myobject = {
    js: 'javascript',
    cpp: 'C++',
    css: 'casacading style sheet',
    cs: 'c sharp'
}
for (const key in myobject) {
    console.log(`This ${key} is for ${myobject[key]}`);
}
//for in loop is for object if we apply it in array humko keys milti hai
const programming = ["html", "css","javascript", "react"]
for (const key in programming) {
    //console.log(key);//output will be 1 2 3 4 5 indexes
    console.log(programming[key]); //here we will get the keys
}