const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
let fakeData = []


// for (let index = 0; index < nepaliNames.length; index++) {
//     let name = nepaliNames[index]
//     fakeData.push({
//         name,
//         email: `${name.toLowerCase()}@gamil.com`,
//         password: `${name}${index}`
//     })
// }

nepaliNames.forEach((name, index) => {
    fakeData.push({
        name,
        email: name + "@gmail.com",
        password: name + index
    })
})

/* hint 
    push method 
    for loop // forEach          
*/

/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

console.log({ fakeData })


let numbers = [1, 2, 3]
let doubledNumbers = []

// numbers.forEach((number) =>{
//     doubledNumbers.push(number * 2)
// })

// doubledNumbers = numbers.map((number) => {
//     return number * 2
// })

doubledNumbers = numbers.map(number => number * 2)

console.log({ doubledNumbers });


const sum1 = (num1, num2) => {
    return num1 + num2
}
const sum = (num1, num2) => num1 + num2
