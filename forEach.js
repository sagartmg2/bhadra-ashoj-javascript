
let names = ["ram", "hari", "shyam"]

const doSomething = (name, index) => {
    console.log(index, "do sometting.. for ", name);
    return undefined
}

for (let index = 0; index <= names.length; index++) {
    const element = names[index];
    doSomething(element, index)
}

/* array function 
    -push
    -forEach
*/

names.forEach(doSomething)

names.forEach((name, index) => {
    console.log("name", name, "index", index);
})


