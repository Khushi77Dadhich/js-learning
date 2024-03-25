const coding = ["html", "css", "javascript", "react", "c++"]

//we are making a normal function
coding.forEach( function (value) {   //callback function hai isliye iska name nhi hota h
    //console.log(value);  
} )

//we are making an arrow funtion
coding.forEach( (item) => {
    console.log(item)
} )

function printme(val) {
    console.log(val);
}
coding.forEach(printme);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

//value from object in array
const mycoding = [
    {
        languagename : "javascript",
        languagesign : "js"
    },
    {
        languagename : "c++",
        languagesign : "cpp"
    },
    {
        languagename : "python",
        languagesign : "py"
    },
]
mycoding.forEach( (item) => {
    console.log(item.languagename);
} )