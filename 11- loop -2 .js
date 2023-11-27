

let names = ["ram", "hari", "shyam", "gita", "abc", "xyz"]
// let names = ["ram", "hari"]

// console.log(names[0]);
// console.log(names[1]);

function printName(index) {
    console.log(names[index]);
}

// printName(0)
// printName(1)

console.log(names.length);
for (let index = 0; index < names.length; index++) {
    console.log("index", index, "name", names[index])
}

let topics = [
    // { title: "html", status: "completed" },
    // { title: "css", status: "completed" },
    // { title: "js", status: "pending" },
    { title: "html", status: true },
    { title: "css", status: true },
    { title: "js", status: false },
]


// console.log(`${topics[0].title} is ${topics[0].status}  `);
// console.log(`${topics[1].title} is ${topics[1].status}  `);

/* reserach : callback function, ternary operator, forEach, map, filter, find */
/* advance reserach : asynchronous function  */

function printTopicStatus(index) {
    console.log(`${topics[index].title} is ${topics[index].status}  `);
}


// printTopicStatus(0)
// printTopicStatus(1)
// printTopicStatus(2)

for (let index = 0; index < topics.length; index++) {
    console.log(`${topics[index].title} is ${topics[index].status}  `);
}

/* html is compoleted */
/* css is compoleted */
/* js is pending */
/* node is pending */
/* react is pending */
/* mongdb is pending */

// ternary operator

