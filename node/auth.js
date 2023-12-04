const bcrypt = require('bcrypt');

const signup = (email, password) => {
    // validate user data
    // check  user exists or not

    bcrypt.hash(password, 10, function (err, hash) {
        console.log("user created.");
        console.log(hash);
    });
}

const login = (email, password) => {
    // validate user data
    // check database has user with that email
    // check password
    // send error
    console.log("user logged in .");
}

// module.exports = login
module.exports = {
    "login": login,
    "signup": signup
}