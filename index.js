


let courses = [
    {
        title: "web",
        time: "4-5",
        students: [
            {
                name: "ram",
                address: {}
            },
            {
                name: "sita",
                address: {}
            },
        ]
    },
    {
        title: "pyhton",
        time: "4-5"
    }
]


let color = "red"


/* code here */
color = "white"

console.log({ "color": color });
console.log({ color });


let course1 = {
    title: "web",
    time: "4-5 PM",
}


/* code here.. */

console.log(course1.title)
console.log(course1.time)

course1.title = "web develoopment"
course1.time = "3-4 PM"

console.log(`time of ${course1.title} is ${course1.time}`)


/* Array 
    collection of similar datas

    syntax

    let <arrayVaraibleName> = [ <element>, <element>  ] 

    Index 
        always starts with 0

*/
let fruits = ["apple", "orange", "kiwi"]

console.log(fruits[2])
console.log(fruits[0])

/* let task1 = {
    title: "html",
    status: "completed"
}

let task2 = {
    title: "css",
    status: "completed"
}

let task3 = {
    title: "js",
    status: "ongoing"
}

let todosList = [task1, task2, task3] */

let todos = [
    {
        // index: 0,
        title: "html",
        status: "pending"
    },
    {
        // index: 1,
        title: "css",
        status: "pending"
    },
    {
        // index: 2,
        title: "js",
        status: "ongoing"
    }
]

/* html is completed  */
/* css is completed  */
/* js is pending  */

/* TODO:  code here..
  convert pending of html and css to completed...
*/

console.log(todos[0].title)

let task1 = todos[0]
console.log(task1.title);

console.log(`${todos[0].title} is ${todos[0].status}`);
console.log(`${todos[1].title} is ${todos[1].status}`);
console.log(`${todos[2].title} is ${todos[2].status}`);




