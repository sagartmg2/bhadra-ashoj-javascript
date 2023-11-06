
/* varaibles
    data-types

    String  - text 
    Number
        inter
        float/double
    Boolean  - true /false
    undefined  (js specific)  // varaible is declared but forgot to put value
    null  - empty


    collections
        array 
        object

]*/

windowNumber = 3

console.log("number of window =", windowNumber);


greetingWord = 'hello'

console.log(greetingWord, "ram")
console.log(greetingWord, "hari")
console.log(greetingWord, "shyam")


var color = "red"
let brand = "samsung"
const ACTIVE_STATUS = false     /// false is fetched from database


console.log(color);
console.log(brand);
console.log(ACTIVE_STATUS);

/* initialziation  and declartion */


/* donot use var */
var price = 10000
var price = 99999.55
console.log("price", price);


/* 
let length  = 100
let length  = 9999  // error: cannot reclare length varaible again

console.log("length",length);
 */


let height;  // variable declartion
height = 5 // initialzation
height = 6 // re-initialzation
height = 7 // re-initialzation  can be re-initialized any number of times...

console.log("height", height)


let width = 10  // variable declartion & initialzaiton
console.log("width", width)


const PI = 3.145;
// PI = 3.1456 // cannot change constant varaible
console.log("PI", PI);


const DOMAIN = "http://xyz.com"
let path1 = "/wikipedia/commons/thumb/e/e0/Git-logo.svg/200px-Git-logo.svg.png"
let path2 = "/wikipedia/commons/thumb/e/e0/Git-logo.svg/200px-node-log.svg.png"


let fullPath1 = DOMAIN + path1
let fullPath2 = DOMAIN + path2



let count
console.log(count)



let fruit1 = "apple"
let fruit2 = "orange"
let fruit3 = "kiwi"

// let fruits = "apple","orange","kiwi"
// let fruits = "apple,orange,kiwi"



/*
        Array
         - collection of multiple values

*/
let fruits = ["apple", "oprange", "kiwi"]
console.log("fruits", fruits)

let students = ["ram", 9811, "shyam", 986, "hari", "ram", 9741]
console.log("students", students);



/* Object

    let <varaibleName> = {
            <key or property or attribute> : <value>,
            <key>: <value>

    }

 */


// let student1 = ["ram", 98111,9866]

let student1 = {
    "name":"ram",
    "age":20,
    class:10,
    phoneNumber:98111,
    alernatePhoneNumber:9851
}

console.log(student1);

let projectorBrand = "samsung"
let projectorPrice = 100000
let projectorColor = "white"


let projector1 = {
    brand:"samsung",
    color:"white",
    price: 100000,
}
let projector2 = {
    brand:"lg",
    color:"white",
    price: 50000,
}


console.log(projector1);
console.log(projector2);






