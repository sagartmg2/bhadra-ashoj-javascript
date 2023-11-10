/* Array , Object mutation.

    index in ararys ... always starts with 0 

*/

let sports = ["soccer", "volleyball", "cricket"]
console.log(sports[0]);
sports[0] = "football"  // this will update soccer text to football
console.log(sports);

let price = 5000
price = 100000
console.log(price);

let sportsWithDetail = [
    {
        title: "soccer",
        country: "abc",
        events: ["world cup"],
    },
    {
        title: "cricket",
        country: "xyz",
        events: [
            {
                title: "olympics",
                hostcountry: "abc",
            },
            {
                title: "asian games",
                hostcountry: "xyz",
            },
        ]  // convert olympics to world cup via code
    }
]

// sportsWithDetail[1].events[0] = "WORLD CUP"
console.log(sportsWithDetail[1].events[0]);
console.log(sportsWithDetail);


// sportsWithDetail[0].title = "football"
// console.log( sportsWithDetail[0].title   );
// console.log(sportsWithDetail) /// soccer should be change to football

/* 
    RESEARCH ON 
        ARROW Function
        IF ELSE 
        TERNARY OPERATOR
        Asynchronous tasks / promises..s
 */



let person = {
    name: "ram"
}
// code here

person.name = "sita"
person.age = 10
console.log(person)

let games = ["soccer", "volleyball", "cricket"]
console.log(games[3]);
games[3] = "basketball"
console.log(games);
