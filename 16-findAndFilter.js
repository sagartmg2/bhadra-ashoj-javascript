

/* for now research on .filter and .find method in array */

let numbers = [1, 11, 3, 4, 5, 6]
// find the even numbers using the numbers array // this can be done using .filter method

/* 
    ARRAY FUNCTIONS
    .push
    .forEach
    .map
    .filter
    .find
*/

/* falsy values in javascript
    - false
    - null
    - undeinfed 
    - 0 
    - ""  // empty string

    - NaN
*/

let double = numbers.filter((el) => {
    if (el % 2 == 0) {
        return true
    }
})
let evnnumbers = numbers.find((el) => el % 2 === 0)

console.log("evnnumbers",evnnumbers);


/* asynchronous programming */
