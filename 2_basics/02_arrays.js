const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)
//iska output ['thor', 'Ironman', 'spiderman'['superman', 'flash', 'batman']] array m ek dusra array insert ho jayega
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
//concat means:- combines two or more arrays. This method returns a new arrays. This method returns a new array without modifying any exiting arrays.
//const  allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);
//... wala use karege because hum ek se jada bhi declare kar sakte hai
//const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//flat mtlb:- returns a new array with all sub-array elements concatenated into it
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) 



console.log(Array.isArray("Khushi")) //output will be false because given name string m h array m nhi h
console.log(Array.from("Khushi")) //output will be Array bana dega output because from keyword is used
console.log(Array.from({name: "Khushi"})) //empty array dega answer m kyo ki usko nhi pata kisko array banaye key ko ya value ko

let score1 = 100
let score2 = 200
let score3 = 300

console.log(array.of(score1, score2. score3));
