// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('task is completed')
//     }, 1000)
// })
// promise.then(function() {
//     console.log("promise comed")
// })

// async function getAllUsers() {
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);        //yeah wala then upar wale response ko handle karega
})
.catch((error) => console.log(error))