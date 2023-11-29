

let dashboard = {
    total: 100,
    expired: 24,
    out_of_stock: 20
}

/*

TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 

__________________________________________________________________________________________________


let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];


You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function


__________________________________________________________________________________________________

OUTPUT SHOULD BE AS BELOW

    dashboard = {
        total: "१००"
        expired: "२४",
        out_of_stock: "२०"
    }

    
*/

// console.log( converToNepali(100) ); 

let numbers = [10, 1, 2, 3, 4, 5]

let doubledNumbers = []
let evenNumbers = []

// doubledNumbers.push(10 * 2)
// doubledNumbers.push(1 * 2)
// doubledNumbers.push(2 * 2)
// doubledNumbers.push(3 * 2)
// doubledNumbers.push(4 * 2)
// doubledNumbers.push(5 * 2)

for (let index = 0; index < numbers.length; index++) {
    doubledNumbers.push(numbers[index] * 2)
}


/* 

function doubleTheArray(inputArray) {
    let output = []
    for(let index=0;index<inputArray.length;index++){
        output.push(  inputArray[index] * 2  )
    }
    return output
}

 */


const doubleTheArray = inputArray => {
    let output = []
    for (let index = 0; index < inputArray.length; index++) {
        output.push(inputArray[index] * 2)
    }
    return output
}


let result1 = doubleTheArray([1, 2, 3])
console.log({ result1 });
let result2 = doubleTheArray([10, 100, 2, 3])
console.log({ result2 });
console.log(doubleTheArray([10, 100, 2, 3]));





