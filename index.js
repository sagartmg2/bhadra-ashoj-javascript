
let numbers = [1, 2, 3, 4]
let doubledNumbers = []

/*
 for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    doubledNumbers.push( element * 2 )
}
 */
/*   map,filter,find    */

numbers.forEach((element, index) => {
    console.log(index);
    doubledNumbers.push(element * 2)
})

console.log(doubledNumbers);