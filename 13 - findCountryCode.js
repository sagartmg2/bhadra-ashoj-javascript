

let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania"
    },
    {
        "code": "dz",
        "name": "Algeria",
        "path": "algeria"
    }
]


/* 
  {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },

*/


/* 
    find the codes of a specific country 

    TODO: 
    create a function findCountryCode 
    - if i pass arguement "Nepal" to the function it should return me np
    - if i pass arguement "zimbabwe" to the function it should return me zw

*/

function findCountryCode(inputCountryName) {

    for (let index = 0; index < countries.length; index++) {
        let selectedCountry = countries[index]
        if (selectedCountry.name.toLowerCase() === inputCountryName.toLowerCase()) {
            return selectedCountry.code
        }
    }
    return "not matched."
}

let afganCode = findCountryCode("Afghanistan")
console.log({ afganCode })

console.log("albanaia", findCountryCode("Albania")   );
console.log("afganistan", findCountryCode("afghanistan")   );
console.log("nepal", findCountryCode("nepal")   );

// let afganCode = findCountryCode("Afghanistan")
// console.log({ afganCode })

// let nepalsCode =  findCountryCode("nepal")
// console.log("code of nepal is",nepalsCode);


// let zimbabwesCode =  findCountryCode("Zimbabwe")
// console.log("code of Zimbabwe is",zimbabwesCode);

/* 

    array functions
    
*/
