/* operators
    comparision
        ==
        ===
        <
        <=
        >
        >=

    logical operator
        AND     &&   all the conditions must be true
        OR      ||  any one of the conditions can be true
        !
*/

/* in database we have 
    email: test@hotmail.com,
    password:"password"
*/

let dbEmail = "test@hotmail.com"
let dbPassword = "password"

let user = {
    email: "test@hotmail.com",
    password: "password"
}


if (user.email == dbEmail && user.password == dbPassword) {
    console.log("logged in");
} else {
    console.log("invalid credentiasl");
}


