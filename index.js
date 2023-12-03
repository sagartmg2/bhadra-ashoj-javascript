/* asynchronous programming 
         tasks that runs in background
         task that donot block other following codes
*/
let doSomTask = () => {
    console.log("inside timeout");
}

setTimeout(doSomTask, 3000)


try {
    let firstName = "first"
    let lastName = "last"
    let fullName = firstName + lastName
    console.log("fullanem is ", fullName);
}
catch (err) {
    console.log(err.message)
}



console.log(1);
console.log(2);
doSomething()
for (let index = 0; index < 10; index++) {
    console.log("index", index);
}
console.log(3);
console.log(4);

function doSomething() {
    console.log("do somehting");
}

// callback function   -- a function passed as parameter to another function 





/* promise 
        - pending
        - resolve
        - reject
*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(["ram", "hari", "shyam"])
        reject("network error")
    }, 1000)
})

console.log(promise);

/* 

promise.then((response) => {
    console.log({ response })
}).catch((err) => {
    console.log({err})
    alert("error is fe\tching data .. please try again later..")
})
console.log("after promise");

*/

/* async await  */
/* callback hell */

async function fetchData() {

    try {
        let count = await promise
        console.log("we have total of ", count, "users");
    }
    catch (err) {
        console.log({ err })
        alert("error is fe\tching data .. please try again later..")
    }
}

fetchData()

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(1, 2));
