// function isPrime(n) {
//     if(n > 1) {
//         for(let i = 2; i< n; i++)
//         if(n % i == 0) {
//             return (`${n} is not a prime number.`);
//         }
//             return (`${n} is a prime.`);
//     }
// }
// console.log(isPrime(108));

// function largenum(a, b, c) {
//     if(a>b && a>c){
//         return (`${a} is greater than ${b} and ${c}.`)
//     }else if(b>a && b>c){
//         return (`${b} is greater than ${a} and ${c}.`)
//     }else{
//         return (`${c} is greater than ${a} and ${b}.`)
//     }
// }
// console.log(largenum(9, 7, 8));

// function primefind(startnum, lastnum) {
//     for(let i = startnum; i < lastnum; i++) {
//             let flag = 0;
//     for(let j = 2 ; j < i; j++) {
//         if(i % j == 0){
//         flag = 1
//         break;
//         }  
//     }
//     if(i > 1 && flag == 0){
//         console.log(i);
//         }   
//     } 
// }   

// console.log(primefind(2, 10));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function check(num1, num2) {
//     let lastnum1 = num1 % 100;
//     let lastnum2 = num2 % 100;
//     if(lastnum1 == lastnum2) {
//         return (`${num1} and ${num2} last digit is same`);
//     }else{
//         console.log("its not same");
//     }
// }
// console.log(check(225, 525));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function individual(num) {
//     return num.toString()
//     .split("")
//     .map(Number);
// }
// console.log(individual(234));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 5, 7, 8, 10];
// let count = 10;
// let output = [];

// for (let i = 1; i<count; i++) {
//     if(!arr.includes(i)) {
//         output.push(i);
//     }
// }
// console.log(output);

// function factor(num) {
//     for(let i = 1; i < num; i++) {
//         if(num % i == 0){
//             console.log(i);
//         }
//     }
// }
// console.log(factor(5));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function power(base, exponent) {
//     return Math.pow(base, exponent);
// }
// console.log(power(5, 4));

// function square(value) {
//     return Math.sqrt( value );
// }
// console.log(square(81));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function findroot(a, b, c) {
//     return b*b + 4*a*c;
// }
// function quadequa(a, b, c) {
//     let d = findroot(a, b, c)

//     if(d>0) {
//         let num1 = ( -b + Math.sqrt(d)) / (2*a);
//         let num2 = ( -b - Math.sqrt(d)) / (2*a);
//         return [num1, num2];
//     }else if(d == 0) {
//         let root = -b / 2 * a;
//         return root;
//     }else {
//         return [];
//     }
// }
// console.log(quadequa(4, 6, 8));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function table(n) {

//     let count = 10;
//     for (let i = 1; i <= count; i++) {
//         console.log(n + "*" + i + "=" + n*i);
//     }
// }
// console.log(table(10));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function fibonacci(num) {
//     if (num == 1)
//         return 0;
//     if (num == 2)
//         return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }
// console.log("Fibonacci(5): " + fibonacci(5));
// console.log("Fibonacci(8): " + fibonacci(8));

// function gcd(a, b) {
//     let small = Math.min(a, b);
//     let hcf = 1;
//     for(let i = 1; i < small; i++) {
//         if(a % i == 0 && b % i ==0) {
//             hcf = i;
//         }
//     }
//     return hcf;
// }
// console.log(gcd(3, 17));

// function negative(n) {
//     if(n < 0) {
//         // n = n * (-1);
//         // return n;
//         let num = Math.abs(n);
//         return num;
//     }
// }
// console.log(negative(-5));

////////////////////////////////////Math.abs() function to convert negative numbers to positive numbers.///////////////////////////////////////////

// function divide(num1, num2) {
//     let quotient = num1 / num2;
//     let remainder = Math.floor(num1 % num2);
//     return `${quotient} is quotient and ${remainder} is remainder of ${num1} and ${num2}`
// }
// console.log(divide(35, 7));

// function factorial(n) {
//     if (n <= 1) return 1
//     return n * factorial(n - 1)
// }
// function permutation(n, r) {
//     if (n < r) return -1
//     return factorial(n) / factorial(n - r)
// };

// function arrayprint(arr) {
//     let firstitem = arr[0];
//     let lastitem = arr[arr.length - 1];
//     return `${firstitem} is firstitem and ${lastitem} is lastitem` 
// }
// let arr = [2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arrayprint(arr));