function login(name, password) {
    if(name === "naveen" && password === "123") {
        return "Logged In"
    }
    else {
        return "Incorrect Password"
    }
}

console.log(login("naveen", "123"))