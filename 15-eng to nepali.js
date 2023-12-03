

let dashboard = {
    total: 100,
    expired: 24,
    out_of_stock: 20
}

let data = [
    {
        total: 100,
        expired: 24,
        out_of_stock: 20
    },
    {
        total: 200,
        expired: 124,
        out_of_stock: 120
    }
]

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

// console.log( converToNepali(100) );  //"१००"

let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

const converToNepali = (input) => {
    let output = ""
    input = input.toString() // "100"
    let inputArr = input.split("") //  ['1', '0', '0']

    inputArr.forEach(el => {
        // output = output + nepali_digits[el]
        output += nepali_digits[el]
    })

    return output
}

console.log(converToNepali(100));
console.log(converToNepali(500));
