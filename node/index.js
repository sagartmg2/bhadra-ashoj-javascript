/* global object */
console.log(__filename); // only available for node
console.log(__dirname); // only available for node

/* module 
    - third party module
    - local module
    - core module
        -fs
        -path
        - http // express 
*/

/* module system
    - common js module  // express
    - es6 module  // import export // react
*/

/* alt + shift + a */
const fs = require("fs")  // core module

import fs from "fs"

const path = require("path")  // core module
// import path from "path"

console.log(path.join(__dirname, "uploads"));

fs.writeFileSync("custom.txt", "hello world")


const auth = require("./auth")

auth.signup("ram@gmail.com", "mysimplepassword")
auth.login("ram@gmail.com", "mysimplepassword")