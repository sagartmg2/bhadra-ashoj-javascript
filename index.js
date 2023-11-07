
/* code here.. */
/* 
    Array 
    let <varaibleName> =  [  <element>, <element>  ]

    Object
    let <objName> = {
        <key> : <value>,
        <key> : <value>,
        <key> : <value>,
        <key> : <value>,
    }

*/


let member1 = {
    name: "ABC",
    phone: 98666,
    role: "father"
}

let member2 = {
    name: "XYZ",
    phone: 985566,
    role: "mother"
}

let member3 = {
    name: "IJK",
    phone: 985566,
    role: "sister"
}

let familyMembers = [member1, member2, member3]


console.log(familyMembers)


let friends = [
    {
        name: "ram",
        address: "balaju"
    },
    {
        name: "sita",
        address: "lainchaur"
    },
]

console.log(friends);

// let course1 = {
//     title: "mern",
//     students: ["abc", "xyz"]
// }

// console.log(course1);


let person1 = {
    name: "ram",
    address: {
        province: 3,
        district: "Kahtmandu",
        ward: 1,
        street: "galli"
    },
    salary: {
        value: 500,
        unit: "Rs."
    },
    phones: [
        { type: "ncell", date: "2022" },
        { type: "ntc", date: "2021" },
    ]
}

/*
    research 
    code here


    cahnge the name ram to sita
    cahnge the slary unit Rs. to $
*/



console.log(person1);
console.log(person1.name)
console.log(person1.salary.value)

/* Salary of Sita is Rs.10000 */
console.log(" Salary of", person1.name, "is", person1.salary.unit, person1.salary.value);
console.log("Salary of " + person1.name + " is " + person1.salary.unit + person1.salary.value);
console.log(`Salary of ${person1.name} is ${person1.salary.unit}${person1.salary.value}`);

/* string concatenation */
/* template literal / string literal */


let greetingText = "Hi"
console.log(greetingText, "world")
console.log(greetingText + ' Hello world')
console.log(`${greetingText} world`)




// let console = {
//     log: funciton
// }



