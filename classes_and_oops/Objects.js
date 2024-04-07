function multipleBy5 (num) {
    return num * 5;
}
multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);   //prototype is not just an method it also give us some inernal property

//in javascript everything is an object function is also a function and its an object also