
/* default paramter values */
// function sum(num1, num2, num3 = 0, num4 = 0) {
//     return num1 + num2 + num3 + num4
// }

/* rest operator / sperad operator */
const sum = (...rest) => {
    let output = 0
    console.log({ rest }) // [1,2,3,4,5,6]
    rest.forEach(number => {
        output += number
    })
    return output
}

console.log(sum(1, 10, 10));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

let arr1 = ["ram", "sita"]
let arr2 = ["hari", ...arr1,]
console.log(arr1);
console.log(arr2);

console.log(__filename);