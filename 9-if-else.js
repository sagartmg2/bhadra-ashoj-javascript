

let user1 = {
    name: "ram",
    role: "receptionist",
};

let user2 = {
    name: "hari",
    role: "manager",
};

let user3 = {
    name: "shyam",
    role: "Client",
};

//who can acces the vault

const REQUIRED_ROLE = "manager";

/* function checkAccess(user) {

    if (user.role == REQUIRED_ROLE) {
        console.log(`${user.name} can access`);
    } else {
        console.log(user.name,"Cannot access");
    }
} */

const checkAccess = (user) => {
    if (user.role === REQUIRED_ROLE) {
        console.log(`${user.name} can access`);
    } else {
        console.log(user.name, "Cannot access");
    }
}

checkAccess(user1);
checkAccess(user2);
checkAccess(user3);




