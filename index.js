let topics = [
    { title: "html", status: true },
    { title: "css", status: true },
    { title: "js", status: false },
]

/* html is compoleted */
/* css is compoleted */
/* js is pending */

// console.log(`${topics[1].title} is ${topics[1].status}`);
// console.log(`${topics[2].title} is ${topics[2].status}`);

// for (let index = 0; index < topics.length; index++) {
//     console.log(` ${topics[index].title} is ${topics[index].status}`);
// }

// for (let index = 0; index < topics.length; index++) {
//     if (topics[index].status) {
//         console.log(`  ${topics[index].title} is completed `);
//     } else {
//         console.log(`${topics[index].title} is pending `);
//     }
// }


for (let index = 0; index < topics.length; index++) {
    // if (topics[index].status) {
    //     console.log(`  ${topics[index].title} is completed `);
    // } else {
    //     console.log(`${topics[index].title} is pending `);
    // }

    /* ternary operator */
    // topics[index].status ? console.log(`  ${topics[index].title} is completed `) : console.log(`${topics[index].title} is pending `);

    let topicStauts = topics[index].status
    let title = topics[index].title

    console.log(` ${title} is ${topicStauts ? "completed" : "pending"} `)

}


let willRain = true
let hasProbabilty = true;


if (willRain) {
    console.log("take umbrealla");
} else if (hasProbabilty) {
    console.log("as you wish");
} else {
    console.log("no need.");
}

/* Ternary operator  -- single line if-else  */

console.log(willRain ? "take it" : "no need"); 
console.log(willRain ? "take it" : (hasProbabilty ? "your wish" : "no need"));

