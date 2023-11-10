let persons = [
    {
        name: "ram",
        phones: [9855, 9841]
    },
    {
        name: "shyam",
    },
]
/* asdd phone numbers for shyam too.  */
/* code here.. */

/* functions  */


/* 
    Simply print them in console.

     1 +  2 = 3
     3 + 4 = 7 
     1 + 4 = 5 
     3 + 1 = 4 
     3 + 4 = 7 

*/
/*  */


/* console.log(`1 + 3 = ${1 + 3}`);
console.log(`2 + 2 = ${2 + 2}`);
console.log(`3 + 2 = ${3 + 2}`);
console.log(`4 + 2 = ${4 + 2}`); */


/* DRY  */
/* function  */


function doSomething() {
    console.log("do something.");
}

// doSomething()
// doSomething()
// doSomething()


function double(input) {  // input here is called a paramater
    console.log(input) // 2 at first, 4 at second function call  and so on..
    console.log(`2 x ${input} = ${2 * input}`);
}

// double(2)  // 2 here is called an arguement 
// double(4) // 4 here is called an arguement 
// double(8)


console.log(typeof (1212));
console.log(typeof ("hello"));
console.log(typeof (true));



function sum(number1, number2) {
    let result = number1 + number2
    // console.log({number1},{number2});
    console.log(`${number1} + ${number2} = ${result}`);
}

sum(10, 2)
sum(10, 20)
sum(100, 20)
sum(100, 70)

// console.log("1" +  1) // type casting
// console.log("5" - 1) // type casting
// console.log("five" - 1) // type casting


function diff(number1, number2) {
    // console.log(`the diff of ${number1} and  ${number2}  is ${ number1 - number2}`);

    let result = number1 - number2
    return result
    // return undefined  // by default
}

console.log("diff", diff(100, 50));
console.log("diff", diff(10, 50));

console.log(diff(20, 10))
