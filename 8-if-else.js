/* conditions: if else */



/* 
if ( condition  ){

}
 */

/* 
if (true) {
    console.log("true statement");
} else {
    console.log("false statement");
}


if ( 10 > 10) {
    console.log("true statement");
} else {
    console.log("false statement");
} */



let willRain = true
let hasProbability = false

/* 
if (willRain) {
    console.log("take umbrella");
} else {
    console.log("no need");
} 
*/

if (willRain) {
    console.log("take umbrella");
} else {
    if (hasProbability) {
        console.log("your wish");
    } else {
        console.log("no need");
    }
}

if (willRain) {
    console.log("take umbrella");
} else if (hasProbability) {
    console.log("your wish");
} else {
    console.log("no need");
}

let user1 = {
    name: "ram",
    role: "receptionist"
}

let user2 = {
    name: "shyam",
    role: "manager"
}

let user3 = {
    name: "hari",
    role: "client"
}

/* who can access the vault */
const REQUIRED_ROLE = "manager"

checkAccess(user1) 
checkAccess(user2)
checkAccess(user3)

/* ternary operator   ? */







